import fromEntries from '../../common/fromEntries';
import isArray from '../../common/isArray';

const folderMap = ({ id, name }) => [id, name];

export default function enumFolders(backpack) {
  return isArray(backpack?.inventories)
    ? fromEntries(
        backpack.inventories.filter(({ id }) => id !== -1).map(folderMap),
      )
    : [];
}
