import {
  EMAIL_REGEX,
  NICKNAME_REGEX,
  PASSWORD_REGEXS,
} from '../constants/regex.js';

export function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

export function validateNickname(nickname) {
  return NICKNAME_REGEX.test(nickname);
}

export function validatePassword(password) {
  return (
    10 <= password.length &&
    2 <= PASSWORD_REGEXS.filter((regex) => regex.test(password)).length
  );
}

export function isSameDate(dateString) {
  return new Date(dateString).getDate() === +dateString.split('.')[2];
}

export function validateDateString(dateString) {
  return (
    dateString.length === 10 &&
    !!Date.parse(dateString) &&
    isSameDate(dateString)
  );
}
