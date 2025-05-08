import './restyleBackpack.css';
import getElementById from '../../common/getElementById';

export default function restyleBackpack() {
  const bpBack = getElementById('backpack');
  bpBack.className = 'fshBackpack';
  bpBack.removeAttribute('style');
}
