import callApp from '../callApp';

export default function buffmarket(data) {
  return callApp({ cmd: 'buffmarket', ...data });
}
