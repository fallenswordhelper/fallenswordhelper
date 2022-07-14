import setText from '../dom/setText';
import addCommas from '../system/addCommas';

export default function setTextCommas(value, node) {
  setText(addCommas(value), node);
}
