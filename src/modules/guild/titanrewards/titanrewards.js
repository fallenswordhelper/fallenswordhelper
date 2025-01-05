import getTextTrim from '../../common/getTextTrim';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import { pcc } from '../../support/layout';

const getTkp = (td) =>
  Number(getTextTrim(td).replace(',', '').replace('\xA0TKP', ''));
const getRequired = (img) =>
  getTkp(img.parentElement.nextElementSibling.nextElementSibling);
const getAvailable = (img) =>
  getTkp(
    img.parentElement.nextElementSibling.nextElementSibling.nextElementSibling,
  );
const getBuy = (img) =>
  querySelector(
    'input[type="submit"]',
    img.parentElement.nextElementSibling.nextElementSibling.nextElementSibling
      .nextElementSibling,
  );

export default function titanrewards() {
  if (!pcc()) return;
  const tkp = querySelectorArray('img[src*="/items/"]', pcc()).map((img) => [
    img,
    getRequired(img),
    getAvailable(img),
    getBuy(img),
  ]);
  tkp
    .filter(([, required, available]) => available >= required)
    .forEach(([, , , buy]) => {
      buy.classList.add('green', 'awesome');
    });
  tkp
    .filter(([, required, available]) => available < required)
    .forEach(([, , , buy]) => {
      buy.disabled = true;
    });
}
