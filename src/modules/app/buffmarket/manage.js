import buffmarket from './buffmarket';

export default function manage(data) {
  return buffmarket({ subcmd: 'manage', ...data });
}
