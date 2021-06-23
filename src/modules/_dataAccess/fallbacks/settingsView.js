import createDocument from '../../system/createDocument';
import indexAjaxData from '../../ajax/indexAjaxData';

const skillMap = [
  { name: 'ca_default', id: 54 },
  { name: 'sc_default', id: 101 },
  { name: 'nv_default', id: 60 },
  { name: 'barricade_default', id: 98 },
];

function getSkills(form) {
  const skills = form.getAll('blockedSkillList[]')
    .map((e) => ({
      id: parseInt(e, 10),
      blocked: true,
      level: 0,
    }));

  skillMap.forEach((skill) => {
    const index = skills.findIndex((s) => s.id === skills.id);
    if (index === -1) {
      skills.push({
        id: parseInt(skill.id, 10),
        blocked: false,
        level: form.get(skill.name),
      });
    } else {
      skills[index].level = form.get(skill.name);
    }
  });
  return skills;
}

function getDrops(form) {
  const entries = [...form.entries()];
  return entries.filter((e) => e[0].startsWith('discardPref'))
    .map((e) => ({
      id: parseInt(e[0][e[0].length - 1], 10),
      action: parseInt(e[1], 10),
    }));
}

function makeFlags(fds) {
  return [
    fds[0].get('pvp_ladder') === '1',
    fds[2].get('ui_preference_11') === '1',
    fds[2].get('ui_preference_15') === '1',
    fds[2].get('disable_wordcensor') === '1',
    fds[2].get('ui_preference_30') === '1',
    fds[2].get('ui_preference_21') === '1',
    fds[2].get('ui_preference_33') === '1',
    fds[2].get('ui_preference_23') === '1',
  ];
}

function resultObject(fds) {
  return {
    s: true,
    r: {
      skills: getSkills(fds[4]),
      item_drop_rarity: getDrops(fds[1]),
      flags: makeFlags(fds),
      min_group_join_level: parseInt(fds[0].get('min_group_level'), 10),
      item_drop_discard_level: parseInt(fds[1].get('auto_discard_level'), 10),
      player_block_type: parseInt(fds[2].get('block_level'), 10),
    },
  };
}

export default async function settingsView() {
  const settingsHTML = await indexAjaxData({ cmd: 'settings' });
  if (!settingsHTML) {
    return {
      s: false,
      e: { message: 'Could not connect to FS servers', code: 1 },
    };
  }
  const settingsPage = createDocument(settingsHTML);
  const fds = [...settingsPage.forms].map((e) => new FormData(e));
  return resultObject(fds);
}
