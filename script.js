function btn1() {
  alert("ahahahahah hakdog");
}

function btn2() {
  alert("lol 👀");
}

function btn3() {
  alert("sge lang");
}

function btn4() {
  alert("Easter Egg: Send Gcash para makapag join");
}
// navbar on scroll -hide
var lastScrollTop = 0;
let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-14vh";
  } else if (scrollTop === 0) {
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.top = "0";
    navbar.style.boxShadow = "0 1px 0.5px rgb(0, 0, 0, 0.1)";
  }
  lastScrollTop = scrollTop;
});

//reveal elements on scroll
window.addEventListener("scroll", function reveal() {
  let reveals = document.querySelectorAll("#reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 70;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
});
