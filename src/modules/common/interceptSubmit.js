import { pcc } from '../support/layout';
import handleSubmit from './handleSubmit';
import on from './on';

export default function interceptSubmit(target) {
  on(target || pcc(), 'submit', handleSubmit);
}
