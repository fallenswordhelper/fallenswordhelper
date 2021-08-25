import alert from '../../alert/alert';
import setValue from './setValue';

export default function delType(e) {
  // console.log('recieved delType', e.detail);
  alert.set(`recieved delType ${e.detail}`);
  setValue(e.detail, 'delPending', true);
  setTimeout(() => { setValue(e.detail, 'delPending', false); }, 2000);
}
