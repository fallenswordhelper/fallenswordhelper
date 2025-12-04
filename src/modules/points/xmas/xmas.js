import formatUtcTimestamp from '../../common/formatUtcTimestamp';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import { pcc } from '../../support/layout';

/* global flamedeerData:true */

export default function xmas() {
  if (flamedeerData?.endTime && pcc()) {
    insertHtmlBeforeEnd(
      pcc(),
      `<div style="color: blue; text-align: center;">
        Ends at: ${formatUtcTimestamp(flamedeerData.endTime)}
      </div>`,
    );
  }
}
