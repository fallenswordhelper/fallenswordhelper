import formatLocalDateTime from '../../common/formatLocalDateTime';
import formatUtcTimestamp from '../../common/formatUtcTimestamp';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import { pcc } from '../../support/layout';

/* global flamedeerData:true */

export default function xmas() {
  if ('flamedeerData' in window && flamedeerData?.endTime && pcc()) {
    insertHtmlBeforeEnd(
      pcc(),
      `<div style="color: blue; text-align: center;">
        Ends at: ${formatUtcTimestamp(flamedeerData.endTime)}
        (Local: ${formatLocalDateTime(new Date(flamedeerData.endTime * 1000))})
      </div>`,
    );
  }
}
