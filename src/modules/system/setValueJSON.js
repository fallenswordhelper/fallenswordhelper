import jsonStringify from '../common/jsonStringify';
import setValue from './setValue';

export default function setValueJSON(name, value) {
  setValue(name, jsonStringify(value));
}
