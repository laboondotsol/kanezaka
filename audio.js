const image1 = document.getElementById("cat-cafe");
const audio1 = document.getElementById("catcafemp3");

const image2 = document.getElementById("pachimari");
const audio2 = document.getElementById("pachimarimp3");

const image3 = document.getElementById("toranosumika");
const audio3 = document.getElementById("toranosumikamp3");

image1.addEventListener('mouseover', () => {
  audio1.play();
});

image1.addEventListener('mouseout', () => {
  audio1.pause();
});

image2.addEventListener('mouseover', () => {
  audio2.play();
});

image2.addEventListener('mouseout', () => {
  audio2.pause();
});

image3.addEventListener('mouseover', () => {
  audio3.play();
});

image3.addEventListener('mouseout', () => {
  audio3.pause();
});