import secure from '../app/trade/secure';
import $dataAccess from './$dataAccess';
import tradeSecure from './fallbacks/tradeSecure';

export default function daTradeSecure() {
  return $dataAccess(secure, tradeSecure);
}
