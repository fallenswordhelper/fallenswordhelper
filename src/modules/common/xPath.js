import xPathEvaluate from './xPathEvaluate';

export default function xPath(expr, doc, context) {
  return xPathEvaluate(XPathResult.ANY_UNORDERED_NODE_TYPE, expr, doc, context).singleNodeValue;
}
