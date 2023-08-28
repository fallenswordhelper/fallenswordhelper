import jsonParse from '../common/jsonParse';
import rnd from '../system/rnd';
import indexAjax from './indexAjax';

export default async function createPotionFromTemplate(tempId) {
  const unsafe = await indexAjax({
    cache: false,
    dataType: 'text',
    data: {
      cmd: 'composing',
      subcmd: 'createajax',
      template_id: tempId,
      fshrnd: rnd(),
    },
  });
  return jsonParse(unsafe) ?? { error: 'Server Error' };
}
