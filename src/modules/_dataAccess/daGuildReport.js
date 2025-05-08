import report from '../app/guild/inventory/report';
import $dataAccess from './$dataAccess';
import guildReport from './fallbacks/guildReport';

export default function daGuildReport() {
  return $dataAccess(report, guildReport);
}
