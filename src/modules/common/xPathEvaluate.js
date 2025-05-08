import fallback from '../system/fallback';

function getDoc(doc, context) {
  if (doc instanceof Document) { return doc; }
  if (context) { return context.ownerDocument; }
  return document;
}

export default function xPathEvaluate(type, expr, _doc, _context) {
  const doc = getDoc(_doc, _context);
  const context = fallback(_context, doc);
  return doc.evaluate(expr, context, null, type, null);
}
