import runDefault from '../../common/runDefault';

const buffmarket = () => { runDefault(import('../../buffmarket/buffmarket')); };

export default {
  '-': { '-': buffmarket },
};
