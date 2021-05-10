import callApp from '../app/callApp';

export default function buyBuffs(packageId) {
  return callApp({
    cmd: 'buffmarket',
    subcmd: 'buy',
    id: packageId,
  });
}
