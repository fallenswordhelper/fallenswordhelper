import { playerIDRE } from "../support/constants";
import regExpFirstCapture from "./regExpFirstCapture";

export default function playerIdFromAnchor(anchor) {
  if (!anchor?.href) return;
  return Number(regExpFirstCapture(playerIDRE, anchor.href));
}
