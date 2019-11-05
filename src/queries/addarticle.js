const databaseConnection = require("../database/db_connection.js");

const addarticle = (user_id,title,description,pic_url,cb) => {
  databaseConnection.query(
    `INSERT into articles (user_id,title,description,pic_url) VALUES($1,$2,$3,$4)`,
    [user_id,title,description,pic_url],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = addarticle;
