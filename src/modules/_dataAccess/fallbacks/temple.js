import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import getTextTrim from '../../common/getTextTrim';
import querySelector from '../../common/querySelector';

export default async function temple() {
  const response = { s: true };
  const doc = await indexAjaxDoc({ cmd: 'temple' });
  if (!doc) response.s = false;
  else {
    const thisPcc = querySelector('#pCC', doc);
    if (!thisPcc) response.s = false;
    else {
      response.r = {
        pray_index: getTextTrim(thisPcc) === 'You are currently praying at the temple.' ? 0 : -1,
      };
    }
  }
  return response;
}
