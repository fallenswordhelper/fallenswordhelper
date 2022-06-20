import closest from '../common/closest';
import navigateTo from '../common/navigateTo';
import on from '../common/on';
import { guildLogUrl, newGuildLogUrl } from '../support/constants';

const conditions = [
  (anchor) => anchor,
  (anchor) => anchor.getAttribute('href') === guildLogUrl,
  (anchor) => !anchor.classList.contains('sendLink'),
];

const allConditions = (anchor) => conditions.every((c) => c(anchor));

function handleClick(e) {
  const anchor = closest('a', e.target);
  if (allConditions(anchor)) {
    e.preventDefault();
    navigateTo(newGuildLogUrl);
  }
}

export default function useNewGuildLog() {
  on(document.body, 'click', handleClick);
}
