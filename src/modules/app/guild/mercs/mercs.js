import guild from '../guild';

export default function mercs(data) {
  return guild({ subcmd: 'mercs', ...data });
}
