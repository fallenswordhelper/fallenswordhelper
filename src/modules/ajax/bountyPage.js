import indexAjaxData from './indexAjaxData';

export default function bountyPage(page) {
  return indexAjaxData({
    cmd: 'bounty',
    page,
  });
}
