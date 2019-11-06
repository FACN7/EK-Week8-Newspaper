const databaseConnection = require("../database/db_connection.js");

const gettitles = (cb) => {
  databaseConnection.query(`SELECT title,article_id,pic_url FROM articles`,
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = gettitles;
