import closestTr from '../../common/closestTr';

export default function removeRow(c) {
  const tr = closestTr(c);
  if (!tr) return;
  const nextRow = tr.nextElementSibling;
  if (!nextRow) return;
  nextRow.remove();
  tr.remove();
}
