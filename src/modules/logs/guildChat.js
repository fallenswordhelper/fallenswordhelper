import getUrlParameter from '../system/getUrlParameter';
import addChatTextArea from './addChatTextArea';
import addLogColoring from './addLogColoring';
import guildChatStyling from './guildChatStyling';

export default function guildChat() {
  guildChatStyling();
  addChatTextArea();
  const chatType = getUrlParameter('chat_type');
  if (chatType && chatType === '1') {
    addLogColoring('Leader', 0, 3);
  } else {
    addLogColoring('Chat', 0, 3);
  }
}
