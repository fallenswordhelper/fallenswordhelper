import runDefault from '../../common/runDefault';

const scavenging = () => { runDefault(import('../../scavenging/scavenging')); };

export default {
  '-': { '-': scavenging },
  process: { '-': scavenging },
};
