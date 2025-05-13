import buffmarket from './buffmarket';

export default function feature(id) {
  return buffmarket({ subcmd: 'feature', id });
}
