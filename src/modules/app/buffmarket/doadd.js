import buffmarket from './buffmarket';

export default function doadd(buffPackage) {
  return buffmarket({ subcmd: 'doadd', ...buffPackage });
}
