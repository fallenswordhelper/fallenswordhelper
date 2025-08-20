import runDefault from '../common/runDefault';
export default function allAppCalls() {
  runDefault(import('../app/arena/dopickmove'));
  runDefault(import('../app/arena/usesetup'));
  runDefault(import('../app/arena/view'));
  runDefault(import('../app/auctionhouse/cancel'));
  runDefault(import('../app/buffmarket/buy'));
  runDefault(import('../app/buffmarket/doAdd'));
  runDefault(import('../app/combat/view'));
  runDefault(import('../app/composing/collect'));
  runDefault(import('../app/composing/view')); // OKAY
  runDefault(import('../app/fetchitem')); // OKAY
  runDefault(import('../app/globalquests/contrib'));
  runDefault(import('../app/guild/advisorView'));
  runDefault(import('../app/guild/fetchinv'));
  runDefault(import('../app/guild/groups/joinall'));
  runDefault(import('../app/guild/groups/view')); // OKAY
  runDefault(import('../app/guild/groups/viewStats'));
  runDefault(import('../app/guild/inventory/doTags'));
  runDefault(import('../app/guild/inventory/dostoreitems'));
  runDefault(import('../app/guild/inventory/recall'));
  runDefault(import('../app/guild/inventory/report')); // OKAY
  runDefault(import('../app/guild/inventory/takeitem'));
  runDefault(import('../app/guild/log'));
  runDefault(import('../app/guild/mercs/accept'));
  runDefault(import('../app/guild/mercs/decline'));
  runDefault(import('../app/guild/mercs/disband'));
  runDefault(import('../app/guild/mercs/search'));
  runDefault(import('../app/guild/mercs/view'));
  runDefault(import('../app/guild/ranks/position'));
  runDefault(import('../app/guild/ranks/ranks')); // OKAY
  runDefault(import('../app/guild/recruit/view')); // OKAY
  runDefault(import('../app/guild/reliclist'));
  runDefault(import('../app/guild/scouttower'));
  runDefault(import('../app/inventing/doinvent'));
  runDefault(import('../app/inventing/domoverecipes'));
  runDefault(import('../app/points/goldupgrades')); // OKAY
  runDefault(import('../app/potionbazaar/buyitem'));
  runDefault(import('../app/profile/destroycomponent'));
  runDefault(import('../app/profile/dodropitems'));
  runDefault(import('../app/profile/equipitem'));
  runDefault(import('../app/profile/loadInventory')); // OKAY
  runDefault(import('../app/profile/loadcomponents'));
  runDefault(import('../app/profile/removeskill'));
  runDefault(import('../app/profile/sendtofolder'));
  runDefault(import('../app/profile/unequipitem'));
  runDefault(import('../app/profile/usecombatset'));
  runDefault(import('../app/profile/useitem'));
  runDefault(import('../app/profile/viewcombatset'));
  runDefault(import('../app/questbook/view'));
  runDefault(import('../app/quickbuff'));
  //runDefault(import('../app/settings/flags'));
  runDefault(import('../app/settings/skill'));
  runDefault(import('../app/settings/view'));
  runDefault(import('../app/superelite')); // OKAY
  runDefault(import('../app/tempinv/takeitems'));
  runDefault(import('../app/temple/pray'));
  runDefault(import('../app/temple/view'));
  runDefault(import('../app/trade/secure'));
  runDefault(import('../app/trade/sendItemsToRecipient'));
  runDefault(import('../app/trade/sendgold'));
  runDefault(import('../app/trade/senditems'));
}
