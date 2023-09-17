import trade from './trade';

export default function secure() {
  return trade({ subcmd: 'secure' });
}
