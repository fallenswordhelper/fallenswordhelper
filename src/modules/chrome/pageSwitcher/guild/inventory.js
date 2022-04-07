import runDefault from '../../../common/runDefault';

const guildReport = () => {
  runDefault(import('../../../guild/inventory/guildReport/guildReport'));
};
const addRemoveTags = () => {
  runDefault(import('../../../guild/inventory/addRemoveTags/addRemoveTags'));
};
const storeitems = () => {
  runDefault(import('../../../guild/inventory/storeitems/storeitems'));
};

export default {
  report: guildReport,
  addtags: addRemoveTags,
  removetags: addRemoveTags,
  storeitems,
};
