import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

export default async function buffMarketBuy(packageId) {
  const buffHtml = await indexAjaxData({ cmd: 'buffmarket', subcmd: 'buy', id: packageId });
  const message = infoBoxFrom(buffHtml);
  if (message === 'Request accepted - buffs have automatically been cast.') {
    return { s: true };
  }
  return { s: false, e: { message } };
}
