
//progress bar 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 


// this changes the images in the carousel from static to gif
$("a[href='#carouselslide-6']").on("click", function(){
  $("#gamermoneybag").attr("src", "./assets/carouselimg/slide6gamer.gif")
});

$("a[href='#carouselslide-7']").on("click", function(){
  $("#thisisalootbox").attr("src", "./assets/carouselimg/slide7gamer.gif")
});


// this changes the first loot box
const lootbox1 = $("#funfactbox1").offset().top;
        
$(window).on("scroll", function(){
  
  $("#scroll-counter").text(Math.round($(document).scrollTop()));
  
  if( $(document).scrollTop() + $(window).height() / 2 > lootbox1){
    
    $("#funfactbox1").attr("src", "./assets/funfactboxes/funfact-box-1.gif");
    
  }
  
});

// loot box number two 
const lootbox2 = $("#funfactbox2").offset().top;

$(window).on("scroll", function(){

  $("#scroll-counter").text(Math.round($(document).scrollTop()));
  
  if( $(document).scrollTop() + $(window).height() / 2 > lootbox2) {

    $("#funfactbox2").attr("src", "./assets/funfactboxes/funfact-box-1.gif");
  
  f}

});

const lootbox3 = $("#funfactbox3").offset().top;

$(window).on("scroll", function(){

  $("#scroll-counter").text(Math.round($(document).scrollTop()));
  
  if( $(document).scrollTop() + $(window).height() / 2 > lootbox3) {

    $("#funfactbox3").attr("src", "./assets/funfactboxes/funfact-box-1.gif");
  
  f}

});



/* JRUE NOTES vvvvv

if you want to record the number of pixels of an object, use offset().top

const variableName = $("#someitem).offset().top

If you want to record the number of pixels you scrolled down

$(document).scrollTop()

If you want to get the size of the window (viewport)

$(window).height()




*/