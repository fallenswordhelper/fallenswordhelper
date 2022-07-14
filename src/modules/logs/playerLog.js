import addLogColoring from './addLogColoring';
import fixFilters from './fixFilters';
import addLogWidgets from './playerLogWidgets/addLogWidgets';

export default function playerLog() {
  addLogColoring('PlayerLog', 1, 3);
  addLogWidgets();
  fixFilters();
}
