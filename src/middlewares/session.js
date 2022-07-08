const { getSession } = require('../db/session');
const { findUserById } = require('../db/user');

function session(req, res, next) {
  const sid = req.cookies['sid'];
  if (sid) {
    getSession(sid, (getSessionError, session) => {
      if (session) {
        findUserById(session.uid, (findUserByIdError, user) => {
          req.session = user;
          next();
        });
      }
    });
  }
}

module.exports = session;
