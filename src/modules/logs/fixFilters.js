import getUrlParameter from '../system/getUrlParameter';
import { indexPhp } from '../support/constants';
import navigateTo from '../common/navigateTo';
import on from '../common/on';
import onclick from '../common/onclick';
import { pCC } from '../support/layout';

export default function fixFilters() {
  const thisType = getUrlParameter('type');
  const injectType = thisType ? `&type=${thisType}` : '';

  const pageNo = getUrlParameter('page');
  const prevPage = pageNo ? `&page=${Number(pageNo) - 1}` : '';
  const nextPage = pageNo ? `&page=${Number(pageNo) + 1}` : '&page=2';

  on(pCC, 'submit', (e) => {
    e.preventDefault();
    const myParams = new URLSearchParams(new FormData(e.target));
    const targetType = myParams.get('type');
    if (targetType !== thisType) { myParams.delete('type'); }
    navigateTo(`${indexPhp}?${myParams.toString()}`);
  });

  onclick(pCC, (e) => {
    if (e.target.tagName === 'INPUT' && ['All', '<', '>'].includes(e.target.value)) {
      e.stopPropagation();
      if (e.target.value === 'All') {
        navigateTo(`${indexPhp}?cmd=log`);
      }
      if (e.target.value === '<') {
        navigateTo(`${indexPhp}?cmd=log${prevPage}${injectType}`);
      }
      if (e.target.value === '>') {
        navigateTo(`${indexPhp}?cmd=log${nextPage}${injectType}`);
      }
    }
  }, true);
}
