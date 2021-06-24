import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://cors-anywhere.herokuapp.com/http://3.35.24.133:5000/api',
  timeout: 100000000,
});

export const getSecondPageData = async () => {
  try {
    const data = await instance.get('/seminar');
    console.log('[SUCCESS] GET second data');
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET second data', e);
    return null;
  }
};
