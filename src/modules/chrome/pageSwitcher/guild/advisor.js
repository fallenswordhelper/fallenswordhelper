import runDefault from '../../../common/runDefault';

const guildAdvisor = () => {
  runDefault(import('../../../guild/advisor/guildAdvisor'));
};

export default {
  '-': guildAdvisor,
  weekly: guildAdvisor,
};
