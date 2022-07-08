const { getSession } = require('../db/session');
const { findUserById } = require('../db/user');

function session(req, res, next) {
  const sid = req.cookies['sid'];

  getSession(sid, (getSessionError, session) => {
    findUserById(session?.uid, (findUserByIdError, user) => {
      req.session = user;
      next();
    });
  });
}

module.exports = session;
