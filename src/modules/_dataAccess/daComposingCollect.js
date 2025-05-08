import indexAjaxDoc from '../ajax/indexAjaxDoc';
import collect from '../app/composing/collect';
import infoBox from '../common/infoBox';
import $dataAccess from './$dataAccess';

async function composingCollect(pid) {
  const buffDoc = await indexAjaxDoc({
    cmd: 'composing',
    subcmd: 'collect',
    potion_id: pid,
  });
  if (!buffDoc) return { s: false };
  const message = infoBox(buffDoc);
  if (message.includes('collected')) return { s: true };
  return { s: false, e: { message } };
}

export default function daComposingCollect(pid) {
  return $dataAccess(collect, composingCollect, pid);
}
