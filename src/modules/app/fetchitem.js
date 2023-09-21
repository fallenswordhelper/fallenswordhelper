import postApp from './postApp';

export default function fetchitem(data) {
  return postApp({
    cmd: 'fetchitem',
    compare: 0,
    ...data,
  });
}
