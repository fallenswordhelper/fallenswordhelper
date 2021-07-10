export default function getElementById(id, doc) {
  if (doc) { return doc.getElementById(id); }
  return document.getElementById(id);
}
