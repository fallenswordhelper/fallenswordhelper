import getCustomUrlParameter from '../system/getCustomUrlParameter';

export default function getPlayerId(href) {
  return getCustomUrlParameter(href, 'player_id');
}
