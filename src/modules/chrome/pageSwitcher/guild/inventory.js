import runDefault from '../../../common/runDefault';

const guildReport = () => {
  runDefault(import('../../../guild/inventory/guildReport/guildReport'));
};
const injectGuildAddTagsWidgets = () => {
  runDefault(import('../../../guild/inventory/injectGuildAddTagsWidgets'));
};
const storeitems = () => {
  runDefault(import('../../../guild/inventory/storeitems/storeitems'));
};

export default {
  report: guildReport,
  addtags: injectGuildAddTagsWidgets,
  removetags: injectGuildAddTagsWidgets,
  storeitems,
};
