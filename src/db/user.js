const db = require('./index');
const { hash } = require('../lib/hash');

function createUser(email, nickname, password, birthday, callback) {
  db.run(
    'INSERT INTO user (email, nickname, password, birthday) VALUES (?,?,?,?)',
    email,
    nickname,
    hash(password),
    birthday,
    (error) => {
      if (error) {
        callback(false);
      } else {
        callback(true);
      }
    },
  );
}

function isUserExist(email, callback) {
  db.get('SELECT email FROM user WHERE email = ?', email, (error, rows) => {
    if (error || rows === undefined) {
      callback(false);
    } else {
      callback(true);
    }
  });
}

function signInUser(email, password, callback) {
  db.get(
    'SELECT email FROM user WHERE email = ? AND password = ?',
    email,
    hash(password),
    (error, rows) => {
      if (error || rows === undefined) {
        callback(false);
      } else {
        callback(true);
      }
    },
  );
}

module.exports = {
  createUser,
  isUserExist,
  signInUser,
};
