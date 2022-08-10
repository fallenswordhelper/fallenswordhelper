import {
  defPlayerBuffs,
  defPlayerUpdate,
} from '../../../support/constants';
import updateBuffInfo from './updateBuffInfo';

export default function buffInfo() {
  $.subscribe(`${defPlayerBuffs} ${defPlayerUpdate}`, updateBuffInfo);
}
