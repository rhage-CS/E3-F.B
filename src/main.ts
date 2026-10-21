const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

/** Creates the portrait's SVG, with all of its shapes and its label. */
function buildFace(): SVGSVGElement {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A sleepy face shaded from warm peach to cool lavender, with a lopsided smile",
  );

  // C: a dusk-to-night gradient, warm peach at the top to cool lavender below.
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const dusk = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "linearGradient",
  );
  dusk.setAttribute("id", "dusk");
  dusk.setAttribute("x1", "0%");
  dusk.setAttribute("y1", "0%");
  dusk.setAttribute("x2", "0%");
  dusk.setAttribute("y2", "100%");
  const duskTop = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  duskTop.setAttribute("offset", "0%");
  duskTop.setAttribute("stop-color", "#f7c59f");
  const duskBottom = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  duskBottom.setAttribute("offset", "100%");
  duskBottom.setAttribute("stop-color", "#9b8ec4");
  dusk.append(duskTop, duskBottom);
  defs.append(dusk);
  face.append(defs);

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "url(#dusk)");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  leftEye.setAttribute("cx", "72");
  leftEye.setAttribute("cy", "82");
  leftEye.setAttribute("rx", "6");
  leftEye.setAttribute("ry", "9");
  leftEye.setAttribute("fill", "#302c29");
  face.append(leftEye);

  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  rightEye.setAttribute("cx", "128");
  rightEye.setAttribute("cy", "82");
  rightEye.setAttribute("rx", "6");
  rightEye.setAttribute("ry", "9");
  rightEye.setAttribute("fill", "#302c29");
  face.append(rightEye);

  const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "96");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "112");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  // C: a relaxed, slightly lopsided smile as a cubic Bézier curve.
  const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
  mouth.setAttribute("d", "M 72 132 C 88 154, 116 152, 130 128");
  mouth.setAttribute("fill", "none");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  // C: sleepy eyelids as quadratic Bézier curves over each eye.
  for (const eyeX of [72, 128]) {
    const lid = document.createElementNS("http://www.w3.org/2000/svg", "path");
    lid.setAttribute("d", `M ${eyeX - 10} 80 Q ${eyeX} 72 ${eyeX + 10} 80`);
    lid.setAttribute("fill", "none");
    lid.setAttribute("stroke", "#302c29");
    lid.setAttribute("stroke-width", "4");
    lid.setAttribute("stroke-linecap", "round");
    face.append(lid);
  }

  return face;
}

const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
