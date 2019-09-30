import { toast } from 'react-toastify';

export const error = (
  message = 'Ocorreu um erro, tente novamente mais tarde.',
  autoClose = 5000
) => {
  toast.error(message, { autoClose });
};

export const success = (message, autoClose = 5000) => {
  toast.success(message, { autoClose });
};
