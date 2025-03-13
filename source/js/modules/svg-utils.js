export function updateSvgViewBox() {
  let width = window.innerWidth;
  const svgForm = document.querySelector('svg');
  const text = document.querySelector('svg text');
  const bigs = document.querySelectorAll('.big');
  const smalls = document.querySelectorAll('.small');
  const video = document.querySelector('foreignObject');

  if (width <= 320) {
    svgForm.setAttribute("viewBox", "0 0 90 90");
    video.setAttribute("width", "200%");
    text.setAttribute("font-size", "10px");
    bigs.forEach((el) => el.setAttribute("display", "none"));
    smalls.forEach((el) => el.setAttribute("display", ""));
  } else {
    svgForm.setAttribute("viewBox", "0 0 180 90");
    video.setAttribute("width", "100%");
    text.setAttribute("font-size", "14px");
    smalls.forEach((el) => el.setAttribute("display", "none"));
    bigs.forEach((el) => el.setAttribute("display", ""));
  }
}
