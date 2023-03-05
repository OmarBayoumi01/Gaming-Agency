let icon = document.querySelector(".toggle-settings i");
let setting = document.querySelector(".settings-box");

icon.onclick = () => {
  icon.classList.toggle("fa-spin");
  setting.classList.toggle("open");
};

let colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.target.dataset.color);

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});

let landingPage = document.querySelector(".landing-page");

let imgaArray = [
  "img-1.jpg",
  "img-2.jpg",
  "img-3.jpg",
  "img-4.jpg",
  "img-5.jpg",
];

setInterval(() => {
  let randomNum = Math.floor(Math.random() * imgaArray.length);

  landingPage.style.backgroundImage = `url(../imgs/${imgaArray[randomNum]})`;
}, 3000);

let section = document.querySelector(".clients");

let spans = document.querySelectorAll(".clients .client-box .progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    console.log("here");
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};
