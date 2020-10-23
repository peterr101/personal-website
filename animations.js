document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const dates = document.querySelectorAll(".date-event");
dates.forEach((date) => {
  date.addEventListener("mouseover", showDate);
  date.addEventListener("mouseleave", removeDate);
});

function showDate(event) {
  let dateElement = null;
  event.target.childNodes.forEach((node) => {
    if (node.nodeName == "SPAN" && node.classList.contains("date")) {
      dateElement = node;
    }
  });
  dateElement.classList.add("showing");
}
function removeDate(event) {
  let dateElement = null;
  event.target.childNodes.forEach((node) => {
    if (node.nodeName == "SPAN" && node.classList.contains("date")) {
      dateElement = node;
    }
  });
  dateElement.classList.remove("showing");
}

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
