import xPathEvaluate from './xPathEvaluate';

export default function xPathAll(expr, doc, context) {
  const snapshot = xPathEvaluate(
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    expr,
    doc,
    context,
  );
  if (!snapshot?.snapshotLength) {
    return;
  }
  const results = [];
  for (let i = 0; i < snapshot.snapshotLength; i += 1) {
    results.push(snapshot.snapshotItem(i));
  }
  return results;
}
