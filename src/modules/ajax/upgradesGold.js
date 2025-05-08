import indexAjaxData from './indexAjaxData';

export default function upgradesGold() {
  return indexAjaxData({
    cmd: 'points',
    type: 1,
  });
}
