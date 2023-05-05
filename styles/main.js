window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

// instantiate the scrollama
const scroller = scrollama();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter((response) => {

    console.log("enter:");
    console.log(response);

    if (response.index >= 1) {
        document.getElementById("funfactbox1");
        $("#funfactbox1 img").attr("src", "./assets/funfact-box-1.gif")
    }

    // function swapImage = function(obj, newSrc){
  
    //     let src = $(obj).attr("src", newSrc);
        
    //     //$(this).attr("src", src.replace(/(^.*?)\d+.(png)/g, "$1" + i + ".png");
    // }

  })
  .onStepExit((response) => {
    // { element, index, direction }
  });
  
