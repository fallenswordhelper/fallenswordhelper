export default function getCustomUrlParameter(sPageURL, sParam) {
  return new URLSearchParams(sPageURL).get(sParam);
}
