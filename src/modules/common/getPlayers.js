import querySelectorArray from './querySelectorArray';

export default function getPlayers() {
  return querySelectorArray('#pCC a[data-tipped*="Last Activity"]');
}
