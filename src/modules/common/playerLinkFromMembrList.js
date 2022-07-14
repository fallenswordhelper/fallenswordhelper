import playerLink from './playerLink';

export default function playerLinkFromMembrList(membrlist, name) {
  if (!membrlist[name]) return name;
  return playerLink(membrlist[name].id, name);
}
