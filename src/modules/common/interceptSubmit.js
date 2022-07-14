import { getPcc } from '../support/layout';
import handleSubmit from './handleSubmit';
import on from './on';

export default function interceptSubmit(target) {
  on(target || getPcc(), 'submit', handleSubmit);
}
