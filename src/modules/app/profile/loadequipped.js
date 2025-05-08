import profile from './profile';

export default function loadEquipped() {
  return profile({ subcmd: 'loadequipped' });
}
