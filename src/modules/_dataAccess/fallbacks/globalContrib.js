import indexAjaxJson from '../../ajax/indexAjaxJson';

const contrib = ({ username, value }) => ({ player: { name: username }, value });

export default async function globalContrib() {
  const gq = await indexAjaxJson({ cmd: 'toprated', subcmd: 'eventcontrib' });
  return { r: gq.map(contrib) };
}
