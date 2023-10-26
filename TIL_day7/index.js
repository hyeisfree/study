const contRating = document.querySelector("#rating");
const stars = document.querySelector("#stars");

const stopPointPixel = [0, 30, 60, 100, 130, 170, 200, 240, 270, 310, 340];
let widthPixel = "0px";

contRating.addEventListener("mousemove", (e) => {
  const offsetX = e.offsetX;
  let width = 0;

  if (offsetX <= 15) {
    width = 0;
  } else {
    for (let i = stopPointPixel.length - 1; i >= 0; i--) {
      if (offsetX > stopPointPixel[i - 1] + 15) {
        width = stopPointPixel[i];
        break;
      }
    }
  }

  stars.style.width = width + "px";
});

contRating.addEventListener("click", (e) => {
  widthPixel = stars.style.width;
});

contRating.addEventListener("mouseleave", (e) => {
  stars.style.width = widthPixel;
});
