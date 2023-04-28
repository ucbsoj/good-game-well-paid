
function swapImage = function(obj, newSrc){
  
    let src = $(obj).attr("src", newSrc);
    
    //$(this).attr("src", src.replace(/(^.*?)\d+.(png)/g, "$1" + i + ".png");
}
  



//const totalFrames = 18;
//const animationDuration = 1000;
//const timePerFrame = animationDuration / totalFrames;
//let timeWhenLastUpdate;
//let timeFromLastUpdate;
//let frameNumber = 1;
//
//function step(startTime) {
//    if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
//    timeFromLastUpdate = startTime - timeWhenLastUpdate;
//
//    if (timeFromLastUpdate > timePerFrame) {
//
//        $('.gamerplaying').css('opacity', 0);
//
//        $(`.playing-${frameNumber}`).css('opacity', 1);
//        
//        timeWhenLastUpdate = startTime;
//
//        if (frameNumber >= totalFrames) {
//            frameNumber = 1;
//          } else {
//            frameNumber = frameNumber + 1;
//          }
//    }
//
//    requestAnimationFrame(step);
//}
//
//$(window).on('load', () => {
//    requestAnimationFrame(step);
//});