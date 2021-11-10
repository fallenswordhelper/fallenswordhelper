import { defCmd } from '../support/constants';
import setValue from '../system/setValue';

export default function setLastScav(caveId, gold) {
  setValue('lastScavPage', `${defCmd}scavenging&cave_id=${caveId}&gold=${gold}`);
}
