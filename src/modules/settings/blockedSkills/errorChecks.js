import { checkForDuplicates } from './blockedSkills';

const loadListChecks = [
  [
    (list) => !list,
    (list) => `Unable to find list "${list.name}". Try refreshing the page.`,
  ],
];

const updateListChecks = [
  [
    (list, blockedSkillLists) => !blockedSkillLists.some((l) => l.name === list.name),
    (list) => `Cannot find list named "${list.name}". Try refreshing the page.`,
  ],
  [
    (list, blockedSkillLists) => checkForDuplicates(blockedSkillLists, list),
    () => 'You already have a list with these skills.',
  ],
];

const newListChecks = [
  [
    (list) => !list.name.length,
    () => 'You must name your list.',
  ],
  [
    (list) => list.name.length > 50,
    () => 'List names can only be at most 50 characters long.',
  ],
  [
    (list, blockedSkillLists) => blockedSkillLists.some((l) => l.name === list.name),
    (list) => `You already have a list named ${list.name}.`,
  ],
  [
    (list, blockedSkillLists) => checkForDuplicates(blockedSkillLists, list),
    () => 'You already have a list with these skills.',
  ],
];

function checkForErrors(checks, ...args) {
  const errPair = checks.find(([test]) => test(...args));
  if (errPair) {
    return errPair[1](...args);
  }
  return false;
}

export function checkLoadList(list) {
  return checkForErrors(loadListChecks, list);
}

export function checkUpdateList(blockedSkillLists, list) {
  return checkForErrors(updateListChecks, list, blockedSkillLists);
}

export function checkNewList(blockedSkillLists, list) {
  return checkForErrors(newListChecks, list, blockedSkillLists);
}
