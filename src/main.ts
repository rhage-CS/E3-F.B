const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A sleepy face surrounded by a twinkling halo of stars, with freckled cheeks",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
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

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

// A: a twinkling halo of 120 stars around the head.
const starCount = 120;
for (let i = 0; i < starCount; i++) {
  const angle = (i / starCount) * Math.PI * 2;
  const ringRadius = 93 + (i % 3); // 93–95: a slightly uneven ring
  const star = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  star.setAttribute("cx", String(100 + ringRadius * Math.cos(angle)));
  star.setAttribute("cy", String(100 + ringRadius * Math.sin(angle)));
  star.setAttribute("r", String(1.5 + ((i * 7) % 5) * 0.4)); // 1.5–3.1
  star.setAttribute("fill", i % 4 === 0 ? "#563b67" : "#e8b931");
  face.append(star);
}

// A: 10 freckles on each cheek, arranged in a small spiral cluster.
for (const cheekX of [68, 132]) {
  for (let k = 0; k < 10; k++) {
    const angle = k * 2.4;
    const distance = 3.5 * Math.sqrt(k);
    const freckle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    freckle.setAttribute("cx", String(cheekX + distance * Math.cos(angle)));
    freckle.setAttribute("cy", String(112 + distance * Math.sin(angle)));
    freckle.setAttribute("r", "1.6");
    freckle.setAttribute("fill", "#b5754a");
    face.append(freckle);
  }
}

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
