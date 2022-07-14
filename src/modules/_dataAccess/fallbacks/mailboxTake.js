import indexAjaxJson from '../../ajax/indexAjaxJson';
import allthen from '../../common/allthen';

function tempinvTake(invId) {
  return indexAjaxJson({
    cmd: 'tempinv',
    subcmd: 'takeitem',
    temp_id: invId,
    ajax: 1,
  });
}

function formatResults(resultAry) {
  const good = resultAry.filter((e) => e.r === 0);
  const bad = resultAry.filter((e) => e.r !== 0);
  if (good.length > 0) {
    return { r: good.map((e) => ({ id: e.temp_id })), s: true };
  }
  if (bad.length > 0) {
    return { e: { message: bad[0].m }, s: false };
  }
  return { e: { message: resultAry[0].m }, s: false };
}

export default function mailboxTake(invIdAry) {
  return allthen(invIdAry.map(tempinvTake), formatResults);
}
