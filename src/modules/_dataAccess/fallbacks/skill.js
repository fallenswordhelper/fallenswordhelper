import indexAjaxData from '../../ajax/indexAjaxData';
import indexAjaxPost from '../../ajax/indexAjaxPost';
import infoBoxFrom from '../../common/InfoBoxFrom';
import settingsView from './settingsView';

async function updateLevels(level) {
  const settings = await settingsView();
  if (!settings.s) {
    return settings;
  }

  const responseHtml = await indexAjaxData({
    cmd: 'settings',
    subcmd: 'save',
    tab: '0',
    pvp_ladder: settings.r.flags[0] ? 1 : 0,
    min_group_level: settings.r.min_group_join_level,
    ca_default: level[54],
    sc_default: level[101],
    nv_default: level[60],
    barricade_default: level[98],
  });
  return infoBoxFrom(responseHtml);
}

async function updateSkills(blocked) {
  const skills = blocked.reduce((a, e, i) => {
    if (e === 1) {
      a.push(i);
    }
    return a;
  }, []);

  const responseHtml = await indexAjaxPost({
    data: {
      cmd: 'settings',
      subcmd: 'updateblockedskills',
      tab: '3',
      blockedSkillList: skills,
    },
  });
  return infoBoxFrom(responseHtml);
}

function makeAppResponse(got, expected) {
  if (got === expected) {
    return { s: true };
  }
  return { s: false, e: { m: got } };
}

export default async function skill(level, blocked) {
  const levelResponse = await updateLevels(level);
  const levelApp = makeAppResponse(levelResponse, 'Account Settings have been updated');
  if (!levelApp.s) {
    return levelApp;
  }

  const skillsResponse = await updateSkills(blocked);
  return makeAppResponse(skillsResponse, 'Blocked Skill settings updated!');
}
