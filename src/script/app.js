// note:Selectors
let links = document.querySelectorAll(".nav-section li #header-nav-span a");
let hoverBlock = document.querySelector(".hover-block");

// note:Hovered Background Effect
links.forEach((a, index) => {
  a.addEventListener("mouseenter", (e) => {
    if (index == 0 && e.target) {
      hoverBlock.style.position = "absolute";
      hoverBlock.style.left = 0;
    }
    if (index == 1 && e.target) {
      hoverBlock.style.position = "absolute";
      hoverBlock.style.left = "130px";
    }
    if (index == 2 && e.target) {
      hoverBlock.style.position = "absolute";
      hoverBlock.style.left = "250px";
      hoverBlock.style.width = "180px";
    } else {
      hoverBlock.style.width = "";
    }
    if (index == 3 && e.target) {
      hoverBlock.style.position = "absolute";
      hoverBlock.style.left = "420px";
    }
    if (index == 4 && e.target) {
      hoverBlock.style.position = "absolute";
      hoverBlock.style.left = "540px";
    }
  });
  a.addEventListener("mouseleave", () => {
    hoverBlock.style.position = "absolute";
    hoverBlock.style.left = 0;
    hoverBlock.style.width = "";
  });
});
