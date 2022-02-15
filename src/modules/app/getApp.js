import api from './api';

export default function getApp(data) {
  return api(data, { method: 'GET' });
}
