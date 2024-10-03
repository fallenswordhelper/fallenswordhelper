import { craftHash } from '../assets';

export default function craftRender(craft) {
  if (craftHash[craft]) {
    return craftHash[craft].abbr;
  }
  return '';
}
