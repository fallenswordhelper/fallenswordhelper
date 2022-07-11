import regExpFirstCapture from '../../../common/regExpFirstCapture';

export default function itemId(href) {
  return regExpFirstCapture(/&id=(\d+)/, href);
}
