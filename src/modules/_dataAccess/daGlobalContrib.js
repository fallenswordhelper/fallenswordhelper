import indexAjaxJson from '../ajax/indexAjaxJson';
import contrib from '../app/globalquests/contrib';
import isArray from '../common/isArray';
import $dataAccess from './$dataAccess';

const formatContrib = ({ username, value }) => ({
  player: { name: username },
  value,
});

async function globalContrib() {
  const gq = await indexAjaxJson({ cmd: 'toprated', subcmd: 'eventcontrib' });
  if (isArray(gq)) return { r: gq.map(formatContrib), s: true };
  return { e: { code: 0, message: 'Server Error' }, s: false };
}

export default function daGlobalContrib() {
  return $dataAccess(contrib, globalContrib);
}
