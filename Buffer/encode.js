const user = 'wlg';
const pass = 'copy.com';
const auth_str = user + ':' + pass;
const buf = Buffer.from(auth_str);
const encode = buf.toString('base64');
console.log(encode);
const decode = Buffer.from(encode, 'base64').toString();
console.log(decode);