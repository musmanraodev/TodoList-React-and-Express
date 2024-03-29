const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp(process.env.DATABASE_URL);

//   db = pgp({
//     database: 'ebay_fav_items',
//     port: 5432,
//     host: 'localhost',
//   });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;
