import indexAjaxData from '../../ajax/indexAjaxData';
import all from '../../common/all';
import infoBoxFrom from '../../common/InfoBoxFrom';

function ajaxResult(componentId, html) {
  const info = infoBoxFrom(html);
  let r = 1; // skipcq: JS-C1002
  if (info === 'Component destroyed.') { r = 0; }
  return { r, m: info, c: componentId };
}

async function destroyComponent(componentId) {
  const html = await indexAjaxData({
    cmd: 'profile',
    subcmd: 'destroycomponent',
    component_id: componentId,
  });
  return ajaxResult(componentId, html);
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
