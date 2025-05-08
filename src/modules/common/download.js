import createAnchor from './cElement/createAnchor';
import clickThis from './clickThis';
import insertElement from './insertElement';

export default function download(blob, filename) {
  const href = URL.createObjectURL(blob);
  const anchor = createAnchor({
    download: filename,
    href,
    style: { display: 'none' },
  });
  insertElement(document.body, anchor);
  clickThis(anchor);
  document.body.removeChild(anchor);
  setTimeout(() => {
    URL.revokeObjectURL(href);
  }, 0);
}
