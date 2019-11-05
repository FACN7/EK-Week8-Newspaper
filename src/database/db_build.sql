
BEGIN;
    DROP TABLE IF EXISTS users,articles;

    CREATE TABLE
    IF NOT EXISTS users(
        user_id SERIAL PRIMARY KEY,
        user_name VARCHAR(50) NOT NULL,
        password TEXT NOT NULL,
        admin boolean DEFAULT FALSE
    );

    CREATE TABLE
    IF NOT EXISTS articles(
        article_id SERIAL PRIMARY KEY,
        user_id INTEGER,
        title TEXT DEFAULT 'untitled',
        description TEXT DEFAULT 'No Description',
        pic_url TEXT,
        date DATE DEFAULT CURRENT_DATE,
        FOREIGN KEY (user_id) REFERENCES users (user_id)
    );

COMMIT;