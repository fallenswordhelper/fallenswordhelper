import buffmarket from './buffmarket';

export default function deletePackage(id) {
  return buffmarket({ subcmd: 'delete', id });
}
