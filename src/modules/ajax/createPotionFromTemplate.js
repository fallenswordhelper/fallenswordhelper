import rnd from '../system/rnd';
import indexAjax from './indexAjax';

export default function createPotionFromTemplate(tempId) {
  return indexAjax({
    cache: false,
    dataType: 'json',
    data: {
      cmd: 'composing',
      subcmd: 'createajax',
      template_id: tempId,
      fshrnd: rnd(),
    },
  });
}
