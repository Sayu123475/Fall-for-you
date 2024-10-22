const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const drawing = document.getElementById("drawing");

let counter = 1;

nextBtn.addEventListener("click", function () {
  counter++;
  counter = counter == 7 ? 1 : counter;
  drawing.src = `./images/drawing${counter}.png`;
});

prevBtn.addEventListener("click", function () {
  counter--;
  counter = counter == 0 ? 6 : counter;
  drawing.src = `./images/drawing${counter}.png`;
});

const sections = document.querySelectorAll("section");
const navigations = document.querySelectorAll("header ul li");

const observerOptions = {
  threshold: 0.75,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const data = entry.target.getAttribute("id");
      console.log(data);

      navigations.forEach(function (nav) {
        if (nav.getAttribute("data-link") == data) {
          nav.classList.add("show");
        } else {
          nav.classList.remove("show");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

const tabBtns = document.querySelectorAll(".tabs-btn");
const contents = document.querySelectorAll(".tabs-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const data = btn.getAttribute("data-tab");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    tabBtns.forEach((button) => {
      button.classList.remove("active");
    });

    document.getElementById(data).classList.add("active");
    btn.classList.add("active");
  });
});
