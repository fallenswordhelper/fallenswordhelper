import { setRealm } from './realm';
import testDynamics from './testDynamics';

export default function titanStats(realm) {
  if (realm.dynamic) {
    setRealm(realm.name);
    testDynamics(realm.dynamic);
  }
}
