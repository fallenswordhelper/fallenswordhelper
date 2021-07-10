export default function createDocument(details) {
  // Use DOMParser to prevent img src tags downloading
  const parser = new DOMParser();
  return parser.parseFromString(details, 'text/html');
}
