import runDefault from '../../common/runDefault';

const breakdown = () => { runDefault(import('../../composing/breakdown')); };
const composingCreate = () => { runDefault(import('../../composing/composingCreate')); };
const composing = () => { runDefault(import('../../composing/composing')); };

export default {
  '-': { '-': composing },
  breakdown: { '-': breakdown },
  create: { '-': composingCreate },
};
