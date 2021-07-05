import getUrlParameter from '../system/getUrlParameter';
import { indexPhp } from '../support/constants';
import navigateTo from '../common/navigateTo';
import on from '../common/on';
import onclick from '../common/onclick';
import { pCC } from '../support/layout';

let thisType;
let injectType;
let prevPage;
let nextPage;

const strategies = [
  ['All', () => ''],
  ['<', () => `${prevPage}${injectType}`],
  ['>', () => `${nextPage}${injectType}`],
];

function clickHandler(e) {
  if (e.target.tagName !== 'INPUT') { return; }
  const thisStrategy = strategies.find(([label]) => label === e.target.value);
  if (thisStrategy) {
    e.stopPropagation();
    navigateTo(`${indexPhp}?cmd=log${thisStrategy[1]()}`);
  }
}

function submitHandler(e) {
  e.preventDefault();
  const myParams = new URLSearchParams(new FormData(e.target));
  const targetType = myParams.get('type');
  if (targetType !== thisType) { myParams.delete('type'); }
  navigateTo(`${indexPhp}?${myParams.toString()}`);
}

export default function fixFilters() {
  thisType = getUrlParameter('type');
  injectType = thisType ? `&type=${thisType}` : '';
  const pageNo = getUrlParameter('page');
  prevPage = pageNo ? `&page=${Number(pageNo) - 1}` : '';
  nextPage = pageNo ? `&page=${Number(pageNo) + 1}` : '&page=2';
  on(pCC, 'submit', submitHandler);
  onclick(pCC, clickHandler, true);
}
