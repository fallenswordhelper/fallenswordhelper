import addGuildLogWidgets from './addGuildLogWidgets';
import addLogColoring from './addLogColoring';

export default function guildLog() {
  addLogColoring('GuildLog', 1, 3);
  addGuildLogWidgets();
}
