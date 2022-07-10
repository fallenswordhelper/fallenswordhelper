import querySelector from '../common/querySelector';
import { guildViewUrl } from '../support/constants';

let haveGuildALink;
let guildALink;

export default function getGuildALink() {
  if (!haveGuildALink) {
    guildALink = querySelector(`#pCC a[href^="${guildViewUrl}"]`);
    haveGuildALink = true;
  }
  return guildALink;
}
