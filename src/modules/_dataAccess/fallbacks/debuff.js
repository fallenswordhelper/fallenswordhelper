import indexAjaxData from '../../ajax/indexAjaxData';
import infoBoxFrom from '../../common/InfoBoxFrom';

export default async function debuff(buffId) {
  const buffHtml = await indexAjaxData({
    cmd: 'profile',
    subcmd: 'removeskill',
    skill_id: buffId,
  });
  const message = infoBoxFrom(buffHtml);
  if (message === 'Skill de-activated successfully.') {
    return { s: true };
  }
  return { s: false, e: { message } };
}
