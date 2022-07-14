import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import getBuffId from '../../common/getBuffId';
import uniq from '../../common/uniq';
import buffReportParser from '../../notepad/buffLog/buffReportParser';

const successObject = ({ successBuff, successLevel }) => ({
  id: getBuffId(successBuff),
  level: Number(successLevel),
});

const castBuffs = (parsedBuffs, o) => parsedBuffs
  .filter(({ name, successBuff }) => name === o.name && successBuff)
  .map(successObject);

const failObject = ({ failBuff, failReason }) => ({
  id: getBuffId(failBuff),
  reason: failReason,
});

const blockedObject = ({ blockBuff, blockReason }) => ({
  id: getBuffId(blockBuff),
  reason: blockReason,
});

const blockedBuffs = (parsedBuffs, o) => parsedBuffs
  .filter(({ name, blockBuff }) => name === o.name && blockBuff)
  .map(blockedObject);

const failedBuffs = (parsedBuffs, o) => parsedBuffs
  .filter(({ name, failBuff }) => name === o.name && failBuff)
  .map(failObject)
  .concat(blockedBuffs(parsedBuffs, o));

const buffsByPlayer = (parsedBuffs) => uniq(parsedBuffs, 'name').map((o) => ({
  player: { name: o.name },
  cast: castBuffs(parsedBuffs, o),
  failed: failedBuffs(parsedBuffs, o),
}));

function getKeys(buffResult) {
  const [,
    successBuff, successLevel, successName,
    failBuff, failReason, failName,
    blockName, blockReason, blockBuff,
  ] = buffResult;
  return {
    name: successName || failName || blockName,
    successBuff,
    successLevel,
    failBuff,
    failReason,
    blockReason,
    blockBuff,
  };
}

function buffFormatter(doc) {
  return { r: buffsByPlayer(buffReportParser(doc).map(getKeys)), s: true };
}

export default async function quickbuff(userAry, buffAry) {
  return buffFormatter(await indexAjaxDoc({
    cmd: 'quickbuff',
    subcmd: 'activate',
    targetPlayers: userAry.join(),
    skills: buffAry,
  }));
}
