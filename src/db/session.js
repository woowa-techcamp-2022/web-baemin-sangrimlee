const db = require('./index');

function createSession(uid, sid, callback) {
  db.run('INSERT INTO session (uid, sid) VALUES (?,?)', uid, sid, callback);
}

module.exports = {
  createSession,
};
