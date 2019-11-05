const databaseConnection = require("../database/db_connection.js");

const getbody = (artical_id,cb) => {
  databaseConnection.query(
    `SELECT description FROM articles WHERE article_id=$1)`,
    [artical_id],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = getbody;
