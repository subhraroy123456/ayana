// const header = document.querySelector("header");
// const topHeader = document.querySelector(".top-header");
// const bars = document.querySelector(".bars");
// const times = document.querySelector(".times");
// const nav = document.querySelector("nav");
// const overlay = document.querySelector('.overlay')


const header = document.querySelector("header");

window.addEventListener('scroll', (e) => {
  if(scrollY > 0) {
    header.classList.add('fixed')
  }
  else {
    header.classList.remove('fixed')
  }
})


var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {

  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.05) {
   
    scrollToTopBtn.classList.add("showBtn");
  } else {
    
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

// var didScroll;
// var lastScrollTop = 0;
// var delta = 1;
// var navbarHeight = $("header").outerHeight();

// $(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   var st = $(this).scrollTop();

//   if (Math.abs(lastScrollTop - st) <= delta) return;

//   if (st > lastScrollTop && st > navbarHeight) {
//     $("header").removeClass("nav-down").addClass("nav-up");
//   } else {
//     if (st + $(window).height() < $(document).height()) {
//       $("header").removeClass("nav-up").addClass("nav-down");
//     }
//   }

//   lastScrollTop = st;
// }

AOS.init({
  disable: function () {
    var maxWidth = 991;
    return window.innerWidth < maxWidth;
  },
});
