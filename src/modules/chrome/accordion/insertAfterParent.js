import sendException from '../../analytics/sendException';
import getElementById from '../../common/getElementById';

export default function insertAfterParent(target, fn, listItem) {
  const tgt = getElementById(target);
  if (tgt instanceof Node) {
    const parent = tgt.parentNode;
    fn(parent, listItem);
  } else { sendException(`#${target} is not a Node`, false); }
}
