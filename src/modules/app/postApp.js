import api from './api';

export default function postApp(data) {
  return api(data, { method: 'POST' });
}
