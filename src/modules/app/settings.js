import callApp from './callApp';

export default function settings() {
  return callApp({ cmd: 'settings' });
}
