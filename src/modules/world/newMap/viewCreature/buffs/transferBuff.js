import isArray from '../../../../common/isArray';

export default function transferBuff(player, transferFrom, transferTo, buffLevel, factor) {
  if (!buffLevel) return {}
  const bonuses = { player: {} };
  if (isArray(transferFrom)) {
    const transfers = transferFrom.map(attr => ({
      attr,
      xfer: player[attr] * buffLevel * factor,
    }));
    transfers.forEach(({attr, xfer}) => {
      bonuses.player[attr] = -xfer;
    });
    bonuses.player[transferTo] = transfers.reduce((acc, {xfer}) => acc + xfer, 0);
  }
  else {
    const xfer = Math.floor(player[transferFrom] * buffLevel * factor);
    bonuses.player[transferFrom] = -xfer;
    bonuses.player[transferTo] = xfer;
  }
  return bonuses;
}
