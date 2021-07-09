import $dataAccess from './$dataAccess';
import mailboxTake from './fallbacks/mailboxTake';
import takeitems from '../app/tempinv/take';

export default function daMailboxTake(invIdAry) {
  return $dataAccess(takeitems, mailboxTake, invIdAry);
}
