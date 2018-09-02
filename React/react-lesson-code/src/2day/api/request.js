import axios from 'axios';

axios.interceptors.response.use(res => {
  if (res.data.code === 0) {
    return res.data.users;
  }else{
    return Promise.reject('错误');
  }
});

export default axios;