import $dataAccess from './_dataAccess';
import guildReport from './fallbacks/guildReport';
import report from '../app/guild/inventory/report';

export default function daGuildReport() {
  return $dataAccess(report, guildReport);
}
