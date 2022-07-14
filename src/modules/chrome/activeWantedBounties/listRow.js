export default function listRow(bounty, makeMouseOver) {
  return `<a href="${bounty.link}" class="xsKhaki tip-static" data-tipped="${
    makeMouseOver(bounty)}">${bounty.target}</a><br>`;
}
