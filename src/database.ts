import { connect, Connection } from '@planetscale/database'
import { Store, User } from './defs'

// ------------------------------------------
// Configure DB Connection
// ------------------------------------------
const connectToPlanetScale = (store: Store): Connection => {
    const DBConfig = {
        host    : store.env.DATABASE_HOST,
        username: store.env.DATABASE_USERNAME,
        password: store.env.DATABASE_PASSWORD,
        fetch   : (url: string, init: any) => {
            delete (init)["cache"]; // Remove cache header
            return fetch(url, init);
        }
    }
    return connect(DBConfig)
}

export const fetchAllPosts = async (store: Store, cat?:Number) => {
    let conn = connectToPlanetScale(store)
    let result = await conn.execute(`
        SELECT
            slug,
            category_id,
            title,
            thumb,
            digs_count,
            buries_count,
            comments_count,
            saves_count,
            created_at,
            archived_at,
            deleted_at,
            Score,
            Recency,
            (Score > 100 AND Recency > 90) AS is_trending,
            Score / Recency * 100 AS Decayed_Score
        FROM (
            SELECT
                *,
                (0.4 * digs_count + 0.3 * comments_count + 0.2 * saves_count) AS Score,
                (100 * LOG(2 + (UNIX_TIMESTAMP(NOW()) - UNIX_TIMESTAMP(created_at)) / 3600)) AS Recency
            FROM posts
            WHERE 
                deleted_at IS NULL
                ${cat? ' AND category_id = ' + cat : ''}
        ) AS subquery
        ORDER BY Decayed_Score DESC
        LIMIT 10;`)
    return result.rows
}

export const checkIfUserBlocked = async (store: Store, id: String) => {
    let conn = connectToPlanetScale(store)

    let result = await conn.execute('select user_oauth_id from blocked_users where user_oauth_id = :id', {id : id})
    return result
}
export const fetchSpecificPostById = async (store: Store) => {
    let conn = connectToPlanetScale(store)

    let result = await conn.execute('select * from posts where slug=:slug', {slug : store.req.slug})
    return result
}

export const getGoogleUserFromDB = async (store: Store, userid: String) => {
    let conn = connectToPlanetScale(store)
    let result = await conn.execute(`
        select id, slug, name, thumb, honorific, flair, role, level, stars, creds, gil from users where google_id=?`, 
        [userid]
    )
    return result
}

export const addGoogleUserToDB = async (store: Store, user: User) => {
    let conn = connectToPlanetScale(store)
    let result = await conn.execute(`
        insert into users 
        (id, slug, name, thumb, honorific, flair, role, level, stars, creds, gil, google_id) 
        values 
        (?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?)`,
        [user.id, user.slug, user.name, user.thumb, user.honorific, user.flair, user.role, user.level, user.stars, user.creds, user.gil, user.google_id]
        )
    return result
}
export const addNewSession = async (store: Store, sessionId: String, userId: String, userAgent: String) => {
    let conn = connectToPlanetScale(store)

    let result = await conn.execute(`
        insert into sessions 
        (session_id, user_id, user_agent) 
        values 
        (?, ?, ?)`,
        [sessionId, userId, userAgent]
        )
    return result
}

    



// func GetUserFromDB(email string) (User, error) {
// 	var user User

// 	db, err := GetDBConn()
// 	if err != nil {
// 		return User{}, err
// 	}

// 	query := `SELECT id, slug, name, thumb, honorific, flair, role, level, stars, creds, gil FROM users WHERE google_id = ? limit 1`
// 	if err := db.QueryRow(query, email).Scan(&user.Id, &user.Slug, &user.Name, &user.Thumb, &user.Honorific, &user.Flair, &user.Role, &user.Level, &user.Stars, &user.Creds, &user.Gil); err != nil {
// 		return User{}, err
// 	}
// 	return user, nil
// }

// func AddUserToDB(user User, oauthIdent string) error {
// 	db, err := GetDBConn()
// 	if err != nil {
// 		return err
// 	}

// 	query := `INSERT IGNORE INTO users (id, slug, name, thumb, honorific, flair, role, level, stars, creds, gil, google_id) 
// 	VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
// 	_, err = db.Exec(query, user.Id, user.Slug, user.Name, user.Thumb, user.Honorific, user.Flair, user.Role, user.Level, user.Stars, user.Creds, user.Gil, oauthIdent)
// 	if err != nil {
// 		return err
// 	}
// 	return nil
// }
