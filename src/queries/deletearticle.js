const databaseConnection = require("../database/db_connection.js");

const deletearticle = (articale_id,cb) => {
  databaseConnection.query(`DELETE FROM articles WHERE article_id=$1 RETURNING *`,
    [articale_id],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = deletearticle;
