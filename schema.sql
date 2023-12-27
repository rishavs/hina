CREATE TABLE IF NOT EXISTS `sessions` ( 
    `session_id`    VARCHAR(32) NOT NULL UNIQUE,
    `user_id`       VARCHAR(32) NOT NULL,
    `user_agent`    VARCHAR(256) NOT NULL,
    `created_at`    timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `blocked_users` (
    `user_id`       varchar(32) PRIMARY KEY, 
    `banned_at`     timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    `banned_note`   varchar(256)    -- note to self. not to be shown to end users
)

CREATE TABLE IF NOT EXISTS `users` ( 
    `id`            varchar(64) PRIMARY KEY, -- apple & google ids
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

    `current_warning_count` int NOT NULL DEFAULT 0, -- warning levels increases on subesequent warnings. reduces when user is good.
    `last_warned_at`        timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `warned_till`           timestamp NOT NULL,
    `warned_for`            varchar(128) NOT NULL
    `total_warning_count`   int NOT NULL DEFAULT 0, -- total number of times user has been warned

    `exiled_at`             timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `exiled_till`           timestamp NOT NULL,
    `exiled_for`            varchar(128) NOT NULL
    `total_exiled_count`    int NOT NULL DEFAULT 0, -- total number of times user has been exiled

    `banned_at`             timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `banned_till`           timestamp NOT NULL,
    `banned_for`            varchar(128) NOT NULL
    `banned_note`           varchar(128)    -- note to self. not to be shown to end users
    `total_banned_count`    int NOT NULL DEFAULT 0, -- total number of times user has been banned

    `created_at`    timestamp DEFAULT CURRENT_TIMESTAMP, 
    `updated_at`    timestamp DEFAULT CURRENT_TIMESTAMP, 
    `deleted_at`    timestamp DEFAULT NULL, 
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
    `is_root`       boolean NOT NULL DEFAULT true,
    `parent_id`     varchar(24) NOT NULL, -- for root posts, parent_id = post_id

    `author_id`     varchar(16) NOT NULL, 

    -- optional fields
    `slug`          varchar(32) UNIQUE, 
    `category`      varchar(4), 
    `title`         varchar(256), 
    `link`          varchar(256), 
    `thumb`         varchar(256), 

    -- text content
    `content`       varchar(4096), 

    -- stats
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
    `archived_at`   timestamp , -- after n days, archive posts. archived posts are not shown in feed and are read only
    `locked_at`     timestamp , -- similar to archived_at but is done intentionally for posts which are running off course
    `deleted_at`    timestamp 
) ;

CREATE TABLE IF NOT EXISTS `posts_dug` (
    `post_id`       varchar(24) NOT NULL, 
    `user_id`       varchar(16) NOT NULL, 
    PRIMARY KEY (`post_id`, `user_id`)
);

CREATE TABLE IF NOT EXISTS `posts_buried` (
    `post_id`       varchar(24) NOT NULL, 
    `user_id`       varchar(16) NOT NULL, 
    PRIMARY KEY (`post_id`, `user_id`)
);

CREATE TABLE IF NOT EXISTS `posts_saved` (
    `post_id`       varchar(24) NOT NULL, 
    `user_id`       varchar(16) NOT NULL, 
    `list_name`     varchar(32) NOT NULL, 
    PRIMARY KEY (`post_id`, `user_id`, `list_name`)
);

CREATE TABLE IF NOT EXISTS `posts_reported` (
    `post_id`       varchar(24) NOT NULL, 
    `reported_by`   VARCHAR(16) NOT NULL,
    `reported_for`  VARCHAR(32) NOT NULL,
        -- 'Harassment', 
        -- 'Violates community guidelines', 
        -- 'Spam', 
        -- 'Sharing personal information', 
        -- 'Self harm', 
        -- 'Illegal activity'
        -- ) NOT NULL,
    `extra_details` VARCHAR(256),

    `reported_at`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    `resolved_by` VARCHAR(16) DEFAULT NULL,
    `resolved_note` VARCHAR(256) DEFAULT NULL,
    `resolved_at`  TIMESTAMP DEFAULT NULL
);