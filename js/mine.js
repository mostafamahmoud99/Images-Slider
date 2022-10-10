const imgs = Array.from(document.querySelectorAll("img"));
const imgContainer = document.getElementById("imgContainer");
const innerContainer = document.getElementById("innerContainer");
const leftBtn = document.getElementById("leftBtn");
const colseBtn = document.getElementById("colseBtn");
const rightBtn = document.getElementById("rightBtn");
let currentIndex = 0;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    imgContainer.style.display = "flex";
    let imgSrc = e.target.src;
    innerContainer.style.backgroundImage = `url(${imgSrc})`;
    currentIndex = imgs.indexOf(e.target);
  });
}

// close btn
colseBtn.addEventListener("click", close);

function close() {
  imgContainer.style.display = "none";
}

// next img

rightBtn.addEventListener("click", next);

function next() {
  currentIndex++;
  if (currentIndex > imgs.length - 1) {
    currentIndex = 0;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  innerContainer.style.backgroundImage = `url(${imgSrc})`;
}

// prev img

leftBtn.addEventListener("click", prev);

function prev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  innerContainer.style.backgroundImage = `url(${imgSrc})`;
}

document.addEventListener("keyup", function (e) {
    if(e.key === 'Escape'){
      close()
    }
    if(e.key === 'ArrowRight'){
      next()
    }
    if(e.key === 'ArrowLeft'){
      prev()
    }
});
