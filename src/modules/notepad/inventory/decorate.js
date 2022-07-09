import { getTheInv } from './buildInv';

export default function decorate() {
  if (getTheInv().folders) {
    getTheInv().folders['-1'] = 'Main';
  }
}
