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

export const fetchAllPosts = async (store: Store) => {
    let conn = connectToPlanetScale(store)
    let result = await conn.execute('select * from posts limit 10')
    return result.rows
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
