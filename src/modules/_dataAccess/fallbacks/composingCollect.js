import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import infoBox from '../../common/infoBox';

export default async function composingCollect(pid) {
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
