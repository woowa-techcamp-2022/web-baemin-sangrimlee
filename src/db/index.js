const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(
  path.join(process.cwd(), 'db', 'db.sqlite'),
  sqlite3.OPEN_READWRITE,
  (error) => {
    if (error) {
      console.error(error.message);
    }
  },
);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS user (
      id        INTEGER PRIMARY KEY,
      email     TEXT NOT NULL,
      nickname  TEXT NOT NULL,
      password  TEXT NOT NULL,
      birthday  TEXT NOT NULL
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS session(
      id  INTEGER PRIMARY KEY, 
      sid TEXT,
      uid INTEGER,
      FOREIGN KEY(uid) REFERENCES user(id)
    );`);
});

module.exports = db;
