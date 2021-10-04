import indexAjaxJson from '../../ajax/indexAjaxJson';

const contrib = ({ username, value }) => ({ player: { name: username }, value });

// Incomplete
export default async function toprated(subcmd) {
  if (subcmd === 'globalquest') {
    const gq = await indexAjaxJson({ cmd: 'toprated', subcmd: 'eventcontrib' });
    return { r: { list: gq.map(contrib) } };
  }
}
