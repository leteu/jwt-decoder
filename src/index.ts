import * as buffer from 'buffer'

function decodeToken<T>(token: string): T {
  let base64Url: string;

  if (token.match(/^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$/)) {
    base64Url = token.split('.')[1];
  } else if (token.match(/^[A-Za-z0-9-_]*$/)) {
    base64Url = token;
  } else {
    console.log('token is not vaild');
    return
  }

  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const JSONToken = JSON.parse(decodeURIComponent(buffer.Buffer.from(base64, 'base64').toString()));

  return JSONToken;
};

export {
  decodeToken
}
export default decodeToken;
