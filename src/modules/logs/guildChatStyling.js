import './guildChat.css';
import querySelector from '../common/querySelector';
import getValue from '../system/getValue';

export default function guildChatStyling() {
  if (!getValue('wrapGuildChat')) { return; }
  const chatTable = querySelector('#pCC table table table table');
  if (!chatTable) { return; }
  chatTable.classList.add('fshGc');
}
