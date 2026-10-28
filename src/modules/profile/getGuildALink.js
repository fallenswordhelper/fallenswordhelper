import hrefStartsWith from '../common/hrefStartsWith';
import querySelectorArray from '../common/querySelectorArray';
import { guildViewUrl } from '../support/constants';

let haveGuildALink = 0;
let guildALink = 0;

export default function getGuildALink() {
  if (!haveGuildALink) {
    guildALink = querySelectorArray('#pCC a').find(
      hrefStartsWith(guildViewUrl),
    );
    haveGuildALink = true;
  }
  return guildALink;
}
