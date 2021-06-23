import settings from './settings';

export default function view() {
  return settings({ subcmd: 'view' });
}
