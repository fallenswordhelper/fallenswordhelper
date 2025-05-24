import buffmarket from './buffmarket';

export default function doAdd(data) {
  return buffmarket({ subcmd: 'doadd', ...data });
}
