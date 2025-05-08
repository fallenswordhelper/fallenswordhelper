import indexAjaxJson from '../../ajax/indexAjaxJson';
import isArray from '../../common/isArray';

const contrib = ({ username, value }) => ({ player: { name: username }, value });

export default async function globalContrib() {
  const gq = await indexAjaxJson({ cmd: 'toprated', subcmd: 'eventcontrib' });
  if (isArray(gq)) return { r: gq.map(contrib), s: true };
  return { e: { code: 0, message: 'Server Error' }, s: false };
}
