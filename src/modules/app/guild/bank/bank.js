import guild from '../guild';

export default function bank(data) {
  return guild({ subcmd: 'bank', subcmd2: 'transaction', ...data });
}
