import { defTable } from '../../support/constants';
import cElement from './cElement';

export default function createTable(props) {
  return cElement(defTable, props);
}
