import buffmarket from './buffmarket';

export default function buy(id) {
  return buffmarket({ subcmd: 'buy', id });
}
