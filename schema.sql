CREATE TABLE IF NOT EXISTS `sessions` ( 
    `session_id`    VARCHAR(24) NOT NULL UNIQUE,
    `user_id`       VARCHAR(24) NOT NULL,
    `user_agent`    VARCHAR(256) NOT NULL,
    `created_at`    timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `blocked_users` (
    `user_oauth_id` varchar(32) PRIMARY KEY, 
    `banned_at`     timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    `banned_note`   varchar(128)    -- note to self. not to be shown to end users
)

CREATE TABLE IF NOT EXISTS `users` ( 
    `id`            varchar(16) PRIMARY KEY, 
    `slug`          varchar(32) NOT NULL UNIQUE, 
    `name`          varchar(32) NOT NULL, 
    `thumb`         varchar(128) NOT NULL, 
    `honorific`     varchar(32) NOT NULL, 
    `flair`         varchar(128) NOT NULL, 
    `role`          varchar(8) NOT NULL, 
    `level`         varchar(16) NOT NULL, 
    `stars`         int NOT NULL, 
    `creds`         int NOT NULL, 
    `gil`           int NOT NULL, 
    `google_id`     varchar(64) UNIQUE, 
    `apple_id`      varchar(64) UNIQUE, 

    `is_punished`   ENUM('warned', 'exiled', 'banned'),
    `warning_level` int NOT NULL DEFAULT 0, -- warning levels increases on subesequent warnings. reduces when user is good.

    `punish_count`  int NOT NULL DEFAULT 0,
    `punished_at`   timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    `punished_till` timestamp NOT NULL,
    `punished_for`  varchar(128) NOT NULL
    `punished_note` varchar(128)      -- note to self. not to be shown to end users

    `created_at`    timestamp DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`    timestamp DEFAULT CURRENT_TIMESTAMP, 
    `deleted_at`    timestamp DEFAULT NULL, 
    CONSTRAINT `both_ids_cannot_be_null` CHECK (((`google_id` is not null) or (`apple_id` is not null))) 
)

CREATE TABLE IF NOT EXISTS `blocked_domains` (
    `domain`        varchar(32) PRIMARY KEY, 
    `banned_at`     timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    `banned_till`   timestamp NOT NULL,
    `banned_note`   varchar(128)    -- note to self. not to be shown to end users
)


CREATE TABLE IF NOT EXISTS `post_categories` ( 
    `id`            int PRIMARY KEY, 
    `name`          varchar(32) NOT NULL, 
    `description`   varchar(128) NOT NULL, 

    `deleted_at`    timestamp NULL DEFAULT NULL, 
)

CREATE TABLE IF NOT EXISTS `posts` ( 
    `id`            varchar(24) PRIMARY KEY, 
    `slug`          varchar(32) NOT NULL UNIQUE, 
    `author_id`     varchar(16) NOT NULL, 
    `category_id`   int NOT NULL,
    `title`         varchar(256) NOT NULL, 
    `link`          varchar(256), 
    `thumb`         varchar(256), 
    `content`       text, 

    `digs_count`    int NOT NULL DEFAULT 1, -- update every time user digs
    `buries_count`  int NOT NULL DEFAULT 0, -- NOT Implmented for now
    `comments_count`int NOT NULL DEFAULT 0, -- update every time user comments
    `saves_count`   int NOT NULL DEFAULT 0, -- update every time user saves
    
    -- `comments_value`int NOT NULL, -- sum of all comments' digs. NOT Implmented for now
    -- `total_value`   int NOT NULL, -- digs count - buries count + avg comments value + saves count

    `is_locked`     boolean NOT NULL DEFAULT false,
    `locked_for`    text,

    `created_at`    timestamp NULL DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`    timestamp NULL DEFAULT CURRENT_TIMESTAMP, 
    `archived_at`   timestamp , 
    `deleted_at`    timestamp 
) ;

-- -- Note: Summary tables are updated every hour
CREATE TABLE IF NOT EXISTS `posts_scores` (
    `id`            varchar(24) PRIMARY KEY, 
    `category_id`   int NOT NULL,

    `curr_score`   int NOT NULL, -- considers digs, comments & saves & comments value
    -- `prev_score`   int NOT NULL, -- considers digs, comments & saves

    `decay_score`   int NOT NULL, -- decayed score
    `final_score`   int NOT NULL, -- final score
)



CREATE TABLE IF NOT EXISTS `posts_dug` (
    `post_id`       varchar(24) NOT NULL, 
    `user_id`       varchar(16) NOT NULL, 
    PRIMARY KEY (`post_id`, `user_id`)
)

CREATE TABLE IF NOT EXISTS `report_posts` (
    `post_id`     VARCHAR(24) NOT NULL,
    `reported_by` VARCHAR(16) NOT NULL,
    `reported_for` VARCHAR(32) NOT NULL,
        -- 'Harassment', 
        -- 'Violates community guidelines', 
        -- 'Spam', 
        -- 'Sharing personal information', 
        -- 'Self harm', 
        -- 'Illegal activity'
        -- ) NOT NULL,
    `extra_details` VARCHAR(256),

    `reported_at`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS `comments` ( 
    `id`            varchar(24) PRIMARY KEY, 
    `post_id`       varchar(24) NOT NULL, 
    `parent_id`     varchar(24) NOT NULL, 
    `author_id`     varchar(16) NOT NULL, 
    `content`       text, 
    `digs`          int NOT NULL, 
    `buries`        int NOT NULL,
    `is_deleted`    boolean NOT NULL DEFAULT false, 

    `created_at`    timestamp NULL DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`    timestamp NULL DEFAULT CURRENT_TIMESTAMP, 
    `archived_at`   timestamp NULL DEFAULT NULL, 
    `deleted_at`    timestamp NULL DEFAULT NULL, 
) 

CREATE TABLE IF NOT EXISTS `comments_dug` (
    `post_id`       varchar(24) NOT NULL, 
    `comment_id`    varchar(24) NOT NULL,
    `user_id`       varchar(16) NOT NULL, 
    PRIMARY KEY (`post_id`, `user_id`)
)

CREATE TABLE IF NOT EXISTS `report_comments` (
    `comment_id`    varchar(24) NOT NULL,

    `reported_by` VARCHAR(16) NOT NULL,
    `reported_for` VARCHAR(32) NOT NULL,
        -- 'Harassment', 
        -- 'Violates community guidelines', 
        -- 'Spam', 
        -- 'Sharing personal information', 
        -- 'Self harm', 
        -- 'Illegal activity'
        -- ) NOT NULL,
    `extra_details` VARCHAR(256),

    `reported_at`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS `sessions` (
    `session_id`  VARCHAR(24) NOT NULL UNIQUE,
    `user_id`     VARCHAR(24) NOT NULL,

    `created_at`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
