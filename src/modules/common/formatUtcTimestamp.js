import formatUtcDateTime from './formatUtcDateTime';

export default function formatUtcTimestamp(timestamp) {
  return formatUtcDateTime(new Date(timestamp * 1000));
}
