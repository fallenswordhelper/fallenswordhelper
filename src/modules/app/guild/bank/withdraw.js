import bank from './bank';

export default function withdraw(amount) {
  return bank({ mode: 'withdraw', amount });
}
