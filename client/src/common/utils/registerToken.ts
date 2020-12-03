import { api, uriParser } from '@utils/index';

const registerToken = async () => {
  if (uriParser.isExistParseCode()) {
    const code = uriParser.getCode();
    const token = await api.getToken(code);
    if (token) {
      localStorage.setItem('token', token);
      window.location.href = '/';
    }
  }
};

export default registerToken;