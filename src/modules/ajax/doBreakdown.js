import indexAjaxPost from './indexAjaxPost';

export default function doBreakdown(selectedList) {
  return indexAjaxPost({
    data: {
      cmd: 'composing',
      subcmd: 'dobreakdown',
      item_list: selectedList,
    },
    dataType: 'json',
  });
}
