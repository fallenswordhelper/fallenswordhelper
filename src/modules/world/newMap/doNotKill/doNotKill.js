import { defAfterUpdateActionlist } from '../../../support/constants';
import afterUpdateActionList from './afterUpdateActionList';
import interceptDoAction from './interceptDoAction';

export default function doNotKill() {
  $.subscribe(defAfterUpdateActionlist, afterUpdateActionList);
  afterUpdateActionList();
  // then intercept the action call
  interceptDoAction();
}
