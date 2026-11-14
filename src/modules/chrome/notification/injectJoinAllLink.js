import './injectJoinAllLink.css';
import daJoinAll from '../../_dataAccess/daJoinAll';
import daViewGroups from '../../_dataAccess/daViewGroups';
import sendEvent from '../../analytics/sendEvent';
import closest from '../../common/closest';
import on from '../../common/on';
import playerName from '../../common/playerName';
import querySelector from '../../common/querySelector';
import setText from '../../dom/setText';
import calf from '../../support/calf';
import getValue from '../../system/getValue';

let joining = false;

const smallEnough = (g) =>
  !calf.enableMaxGroupSizeToJoin || g.members.length < calf.maxGroupSizeToJoin;
const hasPlayer = (m) => m.name === playerName();
const isOpen = (g) => !g.members.find(hasPlayer);
const getId = (g) => g.id;

async function doJoinAll() {
  const json = await daViewGroups();
  if (!json?.s) return;
  const openGroups = json.r.filter(smallEnough).filter(isOpen).map(getId);
  if (openGroups.length) await daJoinAll(openGroups);
}

const isPlainClick = (e) =>
  e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey;

async function handleClick(e) {
  const notification = closest('#notification-guild-group', e.target);
  if (!notification || !isPlainClick(e)) return;
  e.preventDefault();
  if (joining) return;
  joining = true;
  sendEvent('notification', 'Join All');
  const content = querySelector('.notification-content', notification);
  setText('', content);
  content?.classList.add('fshSpinner');
  try {
    await doJoinAll();
    setText('Joined.', content);
  } finally {
    content?.classList.remove('fshSpinner');
    joining = false;
  }
}

// The game redraws the notifications every minute, so leave its markup alone
// and take over the click instead.
export default function injectJoinAllLink() {
  if (getValue('joinAllLink')) on(document.body, 'click', handleClick);
}
