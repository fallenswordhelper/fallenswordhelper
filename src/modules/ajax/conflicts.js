import indexAjaxData from './indexAjaxData';

export default function conflicts(page) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'conflicts',
    page,
  });
}
