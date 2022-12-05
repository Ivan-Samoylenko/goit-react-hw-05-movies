import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function PageNotFound() {
  toast.info(
    'Page with this address was not found. you have been redirected to the home page.'
  );

  return <Navigate to="/" />;
}
