import runDefault from '../../common/runDefault';

const breakdown = () => {
  runDefault(import('../../composing/breakdown/breakdown'));
};
const composingCreate = () => {
  runDefault(import('../../composing/create/composingCreate'));
};
const composing = () => {
  runDefault(import('../../composing/composing'));
};

export default {
  '-': { '-': composing },
  breakdown: { '-': breakdown },
  create: { '-': composingCreate },
};
