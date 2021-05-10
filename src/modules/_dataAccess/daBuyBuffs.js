import $dataAccess from './_dataAccess';
import buyBuffs from '../buffmarket/buyBuffs';
import buyBuffsFallback from './fallbacks/buyBuffs';

export default function daSuperElite(packageId) {
  return $dataAccess(buyBuffs, buyBuffsFallback, packageId);
}
