// note:Selectors
let links = document.querySelectorAll(".nav-section li #header-nav-span a");
let hoverBlock = document.querySelector(".hover-block");
let textSliderContainer = document.querySelector(".text-slider-container");
let textSection = document.querySelector(".text-section");
let textSectionImg = document.querySelector(".text-section img");
let sliderButton = document.querySelector(".bottom-section button");
let fullBackgroundSlider = document.querySelector(".slider-image-section ");
let fullBackgroundSliderImg = document.querySelector(
  ".slider-image-section img"
);
console.log(fullBackgroundSliderImg);

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

// note:Slider-Function


