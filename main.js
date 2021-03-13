var prev = $(".prev");
var post = $(".next");
var circle = $(".fas.fa-circle")
console.log(circle);

//4 funzioni diverse per i vari elementi//
// function backword(){
//
//   var imgActive = $(".images img.active");
//
//   if (!imgActive.hasClass("first")) {
//
//     imgActive.removeClass("active");
//     imgActive.prev().addClass("active");
//
//   } else {
//      var lastImg = $("img.last");
//
//      imgActive.removeClass("active");
//      lastImg.addClass("active");
//   }
//
// }
//
// function bulletBackword (){
//   var circleActive = $(".fas.fa-circle.active");
//
//   if (!circleActive.hasClass("first")) {
//
//     circleActive.removeClass("active");
//     circleActive.prev().addClass("active");
//
//   } else {
//     var lastCircle = $(".fas.fa-circle.last");
//
//     circleActive.removeClass("active");
//     lastCircle.addClass("active");
//   }
// }
//
// function forward (){
//
//   var imgActive = $(".images img.active");
//
//   if (!imgActive.hasClass("last")) {
//
//     imgActive.removeClass("active");
//     imgActive.next().addClass("active");
//
//   } else {
//      var firstImg = $("img.first")
//
//      imgActive.removeClass("active");
//      firstImg.addClass("active");
//   }
//
// }
//
// function bulletforword (){
//   var circleActive = $(".fas.fa-circle.active");
//
//   if (!circleActive.hasClass("last")) {
//
//     circleActive.removeClass("active");
//     circleActive.next().addClass("active");
//
//   } else {
//     var firstCircle = $(".fas.fa-circle.first")
//
//     circleActive.removeClass("active");
//     firstCircle.addClass("active");
//   }
//
// }
//
// prev.click(
//   function (){
//
//     backword();
//     bulletBackword();
//
//   }
// );
//
//
// post.click(
//   function (){
//
//     forward();
//     bulletforword();
//
//   }
// );
//prima funzione di prova//
// post.click(
//   function(){
//     var circleActive = $(".fas.fa-circle.active")
//
//     if (!circleActive.hasClass("last")) {
//
//       circleActive.removeClass("active");
//       circleActive.next().addClass("active");
//
//     } else {
//       var firstCircle = $(".fas.fa-circle.first")
//
//       circleActive.removeClass("active");
//       firstCircle.addClass("active");
//     }
//   }
// );

$(document).keydown(

  function(e){

    if (e.which == 37){

      var imgActive = $(".images img.active");
      var lastImg = $("img.last");
      generalBackword(imgActive, lastImg);

      var circleActive = $(".fas.fa-circle.active");
      var lastCircle = $(".fas.fa-circle.last");
      generalBackword(circleActive, lastCircle);

    } else if (e.which == 39) {

      var circleActive = $(".images img.active");
      var firstCircle = $("img.first");
      generalForward(circleActive, firstCircle);

      var bulletActive = $(".fas.fa-circle.active");
      var firstBullet = $(".fas.fa-circle.first");
      generalForward(bulletActive, firstBullet);
    }
  }

);

////// SOLO 2 FUNZIONI GENERICHE ////////

function generalForward(activElement, firstElement) {

  if (!activElement.hasClass("last")) {

    activElement.removeClass("active");
    activElement.next().addClass("active");

  } else {

     activElement.removeClass("active");
     firstElement.addClass("active");
  }

}

function generalBackword(activElement, lastElement) {

  if (!activElement.hasClass("first")) {

    activElement.removeClass("active");
    activElement.prev().addClass("active");

  } else {

     activElement.removeClass("active");
     lastElement.addClass("active");
  }

}


prev.click(
  function (){
    var imgActive = $(".images img.active");
    var lastImg = $("img.last");
    generalBackword(imgActive, lastImg);

    var circleActive = $(".fas.fa-circle.active");
    var lastCircle = $(".fas.fa-circle.last");
    generalBackword(circleActive, lastCircle);
  }
);


post.click(
  function (){
    var circleActive = $(".images img.active");
    var firstCircle = $("img.first");
    generalForward(circleActive, firstCircle);

    var bulletActive = $(".fas.fa-circle.active");
    var firstBullet = $(".fas.fa-circle.first");
    generalForward(bulletActive, firstBullet);
  }
);

//funzione per click dei bullet//
circle.click(
  function (){
    var circleActive = $(".fas.fa-circle.active");
    var imgActive = $(".images img.active");
    var thisIndex = $(this).index(".fas.fa-circle");
    var is = $(".images").find("img");

    circleActive.removeClass("active");
    $(this).addClass("active");
    imgActive.removeClass("active");
    is.eq(thisIndex).addClass("active");

  }
);
