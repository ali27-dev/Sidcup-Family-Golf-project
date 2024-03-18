let cursr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursr.style.left = dets.x + "px";
  cursr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursr.style.scale = 3;
    cursr.style.border = "1px solid #fff";
    cursr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursr.style.scale = 1;
    cursr.style.border = "0px solid #95c11e";
    cursr.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -70%",
    scrub: 3,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  duration: 1,
  opacity: 0,
  // stagger: 0.3,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    scrub: 1,
    start: "top 60%",
    end: "top 55%",
  },
});

gsap.from(".card", {
  scale: 0.8,
  duration: 0.5,
  opacity: 0,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    scrub: 1,
    start: "top 70%",
    end: "top 65%",
  },
});
gsap.from("#colon1", {
  y: -60,
  x: -60,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    scrub: 4,
    start: "top 55%",
    end: "top 45%",
  },
});
gsap.from("#colon2", {
  y: 60,
  x: 60,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    scrub: 4,
    start: "top 70%",
    end: "top 65%",
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    scrub: 3,
    start: "top 75%",
    end: "top 70%",
  },
});
