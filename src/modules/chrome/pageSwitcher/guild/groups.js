import runDefault from '../../../common/runDefault';

const groups = () => {
  runDefault(import('../../../guild/groups/groups'));
};
const injectGroupStats = () => {
  runDefault(import('../../../guild/groups/injectGroupStats'));
};

export default {
  viewstats: injectGroupStats,
  joinallgroupsundersize: groups,
  joinall: groups,
  '-': groups,
};
