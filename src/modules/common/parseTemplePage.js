import getTextTrim from './getTextTrim';
import querySelector from './querySelector';

export default function parseTemplePage(doc) {
  if (!doc) return { s: false };
  const thisPcc = querySelector('#pCC', doc);
  if (!thisPcc) return { s: false };
  return {
    s: true,
    r: {
      pray_index:
        getTextTrim(thisPcc) === 'You are currently praying at the temple.'
          ? 0
          : -1,
    },
  };
}
