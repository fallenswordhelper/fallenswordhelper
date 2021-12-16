import indexAjaxPost from '../../ajax/indexAjaxPost';
import infoBoxFrom from '../../common/InfoBoxFrom';

export default async function updateBlockedSkills(skills) {
  const data = {
    cmd: 'settings',
    subcmd: 'updateblockedskills',
    tab: '3',
    blockedSkillList: skills,
  };
  const responseHtml = await indexAjaxPost({ data });
  const message = infoBoxFrom(responseHtml);
  if (message === 'Blocked Skill settings updated!') {
    return { s: true };
  }
  return { s: false, e: { message } };
}
