import {
  defPlayerBuffs,
  defPlayerUpdate,
} from '../../../support/constants';
import updateBuffInfo from './updateBuffInfo';

export default function buffInfo() {
  updateBuffInfo();
  $.subscribe(`${defPlayerBuffs} ${defPlayerUpdate}`, updateBuffInfo);
}
