const db = require('./index');
const { hash } = require('../lib/hash');

function isEmailExist(email, callback) {
  db.get('SELECT email FROM user WHERE email = ? LIMIT 1', email, callback);
}

function createUser(email, nickname, password, birthday, callback) {
  db.run(
    'INSERT INTO user (email, nickname, password, birthday) VALUES (?,?,?,?)',
    email,
    nickname,
    hash(password),
    birthday,
    callback,
  );
}

function signInUser(email, password, callback) {
  db.get(
    'SELECT id, email FROM user WHERE email = ? AND password = ? LIMIT 1',
    email,
    hash(password),
    callback,
  );
}

module.exports = {
  createUser,
  isEmailExist,
  signInUser,
};
