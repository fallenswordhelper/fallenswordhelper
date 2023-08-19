import jsonParse from '../common/jsonParse';
import indexAjaxPost from './indexAjaxPost';

export default async function doBreakdown(selectedList) {
  const unsafe = await indexAjaxPost({
    data: {
      cmd: 'composing',
      subcmd: 'dobreakdown',
      item_list: selectedList,
    },
    dataType: 'text',
  });
  return jsonParse(unsafe) ?? { error: 1, msg: 'Server Error' };
}
