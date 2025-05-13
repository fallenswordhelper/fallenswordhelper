import buffmarket from './buffmarket';

export default function toggle(id) {
  return buffmarket({ subcmd: 'toggle', id });
}
