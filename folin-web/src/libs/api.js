import axios from 'axios';

const instance = axios.create({
  baseURL: '3.35.24.133:5000/api/',
  timeout: 1000,
});

export const getSecondPageData = async () => {
  try {
    const data = await instance.get('/seminar');
    console.log('[SUCCESS] GET card data');
    return data.data;
  } catch (e) {
    console.log('[FAIL] GET card data');
    return null;
  }
};
