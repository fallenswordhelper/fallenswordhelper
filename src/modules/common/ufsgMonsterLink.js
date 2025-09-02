import sendEvent from "../analytics/sendEvent";
import { defSubcmd, guideUrl, monsterIdRe } from "../support/constants";
import createAnchor from "./cElement/createAnchor";
import insertElement from "./insertElement";
import insertElementBefore from "./insertElementBefore";
import onclick from "./onclick";
import regExpFirstCapture from "./regExpFirstCapture";

export function ufsgMonsterLink(eventSource, monsterId, anchor) {
  const thisAnchor = anchor ?? createAnchor({});
  thisAnchor.href = `${guideUrl}creatures${defSubcmd}view&creature_id=${monsterId}`;
  thisAnchor.target = '_blank';
  onclick(thisAnchor, () => sendEvent(eventSource, 'Ufsg link'));
  return thisAnchor;
}

export function ufsgLinkFromImg(eventSource, img) {
  const monsterId = regExpFirstCapture(monsterIdRe, img.src);
  if (!monsterId) return;
  const myLink = ufsgMonsterLink(eventSource, monsterId);
  insertElementBefore(myLink, img);
  insertElement(myLink, img);
}
