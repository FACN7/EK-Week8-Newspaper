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

INSERT INTO users (user_name,password,admin) VALUES ('ali','1234567',FALSE);

INSERT INTO users (user_name,password,admin) VALUES ('samih','1234567',FALSE);

INSERT INTO articles (user_id,title,description,pic_url) VALUES (1,'nuclear arms deal party', 'contravertial superstar Nikolas Abdolhamid Yohanen Gonsales Robotosky is making a new party in Maiami , sources say its THE BOMB',null);

INSERT INTO articles (user_id,title,description,pic_url) VALUES (1,'General election 2019: Labour’s four-day week ‘to cost taxpayers £17bn','Jeremy Corbyn’s aim to introduce a four-day working week would cost the taxpayer at least £17 billion a year because of the impact on the public sector wage bill, a new analysis has shown.','https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6e4e6134-ff54-11e9-89d5-2f6d95957dda.jpg?crop=3036%2C1708%2C0%2C158&resize=685');

INSERT INTO articles (user_id,title,description,pic_url) VALUES (2,'Single? No, I’m a happy self‑partner, says Emma Watson','She is Emma Watson, and she is not single but self-partnered. She used the expression in an interview in this month’s edition of British Vogue in which she talked about the stress of turning 30 next April.','https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2F6be631f4-ffb0-11e9-ac10-05df8e730a81.jpg?crop=2760%2C3450%2C233%2C85&resize=498');

INSERT INTO articles (user_id,title,description,pic_url) VALUES (2,'The Lib Dems are being squeezed out of a two-party contest','Yes, in 2017 they won 12 seats, four more than they had after their 2015 evisceration. But under Tim Farron their vote share in fact fell by half a percentage point, to 7.4 per cent.The party had never received a smaller slice of the vote since its formation. Even the Liberals, in their unmerged form, had not had so low a share since the 1959','https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ff69eb42a-ffc3-11e9-a47f-d3b51643f481.jpg?crop=3500%2C2333%2C0%2C0&resize=720');

INSERT INTO articles (user_id,title,description,pic_url) VALUES (1,'Death of prince Karem','Prince Karem I, the next in line to rule The Kingdom of Sandalia, dies at the young age of 86, flippin` `ell',null);

COMMIT;