import axios from 'axios';

  const instance = axios.create({
    baseURL: 'https://oigab.github.io/test/api/',
  });

  const addFile = async (body) => {
    try {
      const { data } = await instance.post('/file/', body);
      return data;
    } catch(error) {
        console.error('error.message:', error.message);
    }
  };

  export const api = {
    addFile,
  };