import BlockedSkills from './BlockedSkills.svelte';

function startApp(props, target) {
  return new BlockedSkills({
    props,
    target,
  });
}

export default function blockedSkills() {
  startApp({}, document.getElementById('settingsTabs-4'));
}
