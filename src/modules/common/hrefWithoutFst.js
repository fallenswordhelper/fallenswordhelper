export default function hrefWithoutFst(anchor) {
  if (!anchor?.href) return '';
  const url = new URL(anchor.href);
  url.searchParams.delete('fst');
  return `${url.pathname.slice(1)}${url.search}`;
}
