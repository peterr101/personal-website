const timeline = gsap.timeline({ defaults: { duration: 0.7 } });
timeline.to("#p1", { x: -15, opacity: 1 });
timeline.fromTo(
  "#line1",
  { height: 0 },
  { duration: 1, height: 100, ease: "bounce" }
);
timeline.to("#p2", { x: -15, opacity: 1 });
timeline.fromTo(
  "#line2",
  { height: 0 },
  { duration: 1, height: 60, ease: "bounce" }
);
timeline.to("#p3", { x: -15, opacity: 1 });
timeline.fromTo(
  "#line3",
  { height: 0 },
  { duration: 1, height: 60, ease: "bounce" }
);
timeline.to("#p4", { x: -15, opacity: 1 });
timeline.fromTo(
  "#line4",
  { height: 0 },
  { duration: 1, height: 60, ease: "bounce" }
);
timeline.to("#p5", { x: -15, opacity: 1 });
