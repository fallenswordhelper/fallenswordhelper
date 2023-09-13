import fromEntries from '../../common/fromEntries';

const folderMap = ({ id, name }) => [id, name];

export default function enumFolders(backpack) {
  return fromEntries(backpack.inventories.filter(({ id }) => id !== -1).map(folderMap));
}
