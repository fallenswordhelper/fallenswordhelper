import xPathEvaluate from './xPathEvaluate';

export default function xPathAll(expr, doc, context) {
  const result = xPathEvaluate(XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, expr, doc, context);
  if (!result?.snapshotLength) { return; }
  const a = [];
  for (let i = 0; i < result.snapshotLength; i += 1) {
    a.push(result.snapshotItem(i));
  }
  return a;
}
