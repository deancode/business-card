VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
  speed: 400,
  max: 50,
  perspective: 300
});

var element = document.querySelector("card");

document.querySelector(".js-destroy").addEventListener("click", function () {
  element.vanillaTilt.destroy();
});

document.querySelector(".js-getvalue").addEventListener("click", function () {
  console.log(element.vanillaTilt.getValues());
});

document.querySelector(".js-reset").addEventListener("click", function () {
  element.vanillaTilt.reset();
});

/*
element.addEventListener("tiltChange", function (event) {
  console.log(event.detail);
});
*/