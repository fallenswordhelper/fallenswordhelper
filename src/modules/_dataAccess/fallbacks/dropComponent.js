import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import all from '../../common/all';
import infoBox from '../../common/infoBox';

function ajaxResult(componentId, doc) {
  const info = infoBox(doc);
  return { r: info === 'Component destroyed.' ? 0 : 1, m: info, c: componentId };
}

async function destroyComponent(componentId) {
  const doc = await indexAjaxDoc({
    cmd: 'profile',
    subcmd: 'destroycomponent',
    component_id: componentId,
  });
  return ajaxResult(componentId, doc);
}

function formatResults(resultAry) {
  const good = resultAry.filter((e) => e.r === 0);
  const bad = resultAry.filter((e) => e.r === 1);
  if (good.length > 0) {
    return { r: good.map((e) => e.c), s: true };
  }
  if (bad.length > 0) {
    return { e: { message: bad[0].m }, s: false };
  }
  return { e: { message: resultAry[0].m }, s: false };
}

export default async function dropComponent(componentIdAry) {
  const resultAry = await all(componentIdAry.map(destroyComponent));
  return formatResults(resultAry);
}
