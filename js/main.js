// window.onscroll(function() {
//   document.getElementsByClassName("navigation-vertical").style.display = "block";
// });

// // function testScroll(ev){
// //   if(window.pageYOffset>400)alert('User has scrolled at least 400 px!');
// // }
// // window.onscroll=testScroll

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("navigation-vertical").style.top = "1000px";
//   } else {
//     document.getElementsByClassName("navigation-vertical").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

$(document).ready(function() {
  $('.nav-dropdown-btn').click(function() {
    $('.navigation').toggleClass('is-active');
  });

  $('.nav-dropdown-btn').click(function(){
		$(this).toggleClass('open');
  });
});


