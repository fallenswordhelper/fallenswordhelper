import indexAjaxData from '../../ajax/indexAjaxData';

export default function bountyPage(page) {
  return indexAjaxData({
    cmd: 'bounty',
    page,
  });
}
