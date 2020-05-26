const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
const sliderLabel = document.getElementById("rangeOutput");
const slider4 = document.getElementById("slider4");

slider1.oninput = function () {
  let color = `linear-gradient(rgba(49, 206, 253, 1),
  rgb(10, 159, 204),
  rgba(4, 138, 179, 1)) no-repeat 0% / ${slider1.value}%`;

  slider1.style.background = color;
};

slider2.oninput = function () {
  let color = `linear-gradient(#98cdf6, #27699c) no-repeat 0% / ${slider2.value}%`;

  slider2.style.background = color;
};

slider3.oninput = function () {
  let bulletPosition = -27 + slider3.value * 4.5 + "px";
  sliderLabel.style.left = bulletPosition;
  sliderLabel.innerHTML = slider3.value;
};
