import { compStore } from './componentsStore';

export default function setValue(itemId, key, value) {
  compStore.update((m) => {
    // if (m.has(itemId)) {
    //   const n = m.get(itemId);
    //   n.set(key, value);
    // }
    m.get(itemId)?.set(key, value);
    return m;
  });
}
