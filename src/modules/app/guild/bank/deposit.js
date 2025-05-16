import bank from './bank';

export default function deposit(amount) {
  return bank({ mode: 'deposit', amount });
}
