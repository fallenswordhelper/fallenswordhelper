import guild from '../guild';

export default function recruit(data) {
  return guild({ subcmd: 'recruit', ...data });
}
