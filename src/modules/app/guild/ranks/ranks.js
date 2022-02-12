import guild from '../guild';

export default function ranks(data) {
  return guild({ subcmd: 'ranks', ...data });
}
