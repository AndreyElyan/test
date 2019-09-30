import api from '../../../services/api';
import { error } from '../../../services/notifier';

export const makeLogin = async data => {
  try {
    const response = await api.post('/admin/login', data);

    return response.data;
  } catch (err) {
    error('Ocorreu um erro, tente novamente mais tarde');
  }
};
