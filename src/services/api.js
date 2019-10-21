import axios from 'axios';

const BASIC_TOKEN =
  'Basic cmM0TTJDdHFKRmpNSzRRYm92WWlSbXRsWTc5bk1IYzk6a1dodHFwWXdmak5uSE5lYzZBcndjZnRTU0dJUWRQNGU=';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(request => {
  const tokenStorage = localStorage.getItem('@Omni:token');
  if (tokenStorage) {
    request.headers.Authorization = tokenStorage
      .replace('"', '')
      .replace('"', '');
  } else {
    delete request.headers.Authorization;
  }
  if (!tokenStorage) {
    request.headers.Authorization = BASIC_TOKEN;
  }

  return request;
});

export default api;
