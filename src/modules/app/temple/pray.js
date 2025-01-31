import temple from './temple';

export default function pray(godType) {
  return temple({ subcmd: 'pray', type: godType });
}
