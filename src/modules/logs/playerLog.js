import addLogColoring from './addLogColoring';
import addLogWidgets from './playerLogWidgets/addLogWidgets';

export default function playerLog() {
  addLogColoring('PlayerLog', 1, 3);
  addLogWidgets();
}
