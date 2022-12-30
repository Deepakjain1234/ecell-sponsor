$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
window.onscroll = function () { scrollFunction() };

function scrollFunction() {


  if(window.innerWidth>1110){
    let nav = document.getElementsByTagName("nav")[0].style;
    let logo = document.getElementById("logo").style;
    let navItem = document.getElementsByClassName("nav-items")[0].style;
  
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      nav.height = "94px";
      logo.height = "60px";
      logo.width = "60px";
      navItem.marginTop = "22px";
      nav.backgroundColor= "#00000084";
     
      
    } else {
      nav.height = "132px";
      logo.height = "94px";
      logo.width = "94px";
      navItem.marginTop = "45px";
      nav.backgroundColor="transparent";
      
      
    }
  }
  else{
    let nav = document.getElementsByTagName("nav")[0].style;
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
      nav.backgroundColor= "#00000084";
    }
    else{
      nav.backgroundColor="transparent";
    }
  }
}


const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-items');
   const navLinks = document.querySelectorAll('.nav-link');
   // Toggle Nav
   burger.addEventListener('click', () => {
     nav.classList.toggle('nav-active');
     // Animate links
     navLinks.forEach((link, index) => {
       if (link.style.animation) {
         link.style.animation = '';
       }
       else {

         link.style.animation = 'navLinkFade 0.5s ease forwards  1';

       }
     });
     // Burger Animation
     burger.classList.toggle('toggle');
   });


 }
 navSlide();

 function closeNav(){
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-items');
  if(window.innerWidth<1110){
    nav.classList.remove("nav-active");
    burger.classList.remove('toggle');

  }
}
// const market = document.querySelector(".marketing");
// function toggleMarket(){
//   market.classList.toggle("marketing-click");
// }
function toggleMarket(){
  document.querySelector(".fa-angle-down").classList.toggle("angle-click");

  document.querySelector(".fa-angle-down").style.transition = "all 1s";
}

$(document).ready(function(){
  $(".market-button").click(function(){
    $(".marketing").slideToggle(1000);
  });
});
  // $(".btn2").click(function(){
  //   $("p").slideDown();
  // });