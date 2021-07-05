import addLogColoring from './addLogColoring';
import addLogWidgets from './playerLogWidgets/addLogWidgets';
import fixFilters from './fixFilters';

export default function playerLog() {
  addLogColoring('PlayerLog', 1, 3);
  addLogWidgets();
  fixFilters();
}
