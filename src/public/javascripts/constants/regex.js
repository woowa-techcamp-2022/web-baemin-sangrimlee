export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const NICKNAME_REGEX = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,16}$/;
export const PASSWORD_REGEXS = [/[A-Z]/, /[a-z]/, /[0-9]/, /[@$!%*#?&]/];
