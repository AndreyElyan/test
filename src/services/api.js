import axios from 'axios';

const BASIC_TOKEN =
  'Basic cmM0TTJDdHFKRmpNSzRRYm92WWlSbXRsWTc5bk1IYzk6a1dodHFwWXdmak5uSE5lYzZBcndjZnRTU0dJUWRQNGU=';

const api = axios.create({
  baseURL: 'https://abf.homolog.api.somosdx.co',
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
