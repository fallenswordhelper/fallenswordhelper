import indexAjaxData from '../../ajax/indexAjaxData';

export default function getGuildLogPage(page) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'log',
    page,
  });
}
