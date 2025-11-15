import './guildChat.css';
import querySelector from '../common/querySelector';
import getUrlParameter from '../system/getUrlParameter';
import getValue from '../system/getValue';
import addChatTextArea from './addChatTextArea';
import addLogColoring from './addLogColoring';

function guildChatStyling() {
  const chatTable = querySelector('#pCC table table table table');
  if (!chatTable) return;
  const chatType = getUrlParameter('chat_type');
  const chatStyle = chatType === '1' ? 'Leader' : 'Chat';
  const cols = chatTable.rows[0].cells.length;
  addLogColoring(chatStyle, 0, cols);
  const wrapStyle = cols === 3 ? 'fsh-guild-chat' : 'fsh-guild-chat-action';
  if (getValue('wrapGuildChat')) chatTable.classList.add(wrapStyle);
}

export default function guildChat() {
  addChatTextArea();
  guildChatStyling();
}
