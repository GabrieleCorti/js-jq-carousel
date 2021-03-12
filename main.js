var prev = $(".prev");
var post = $(".next");
var circle = $(".fas.fa-circle")
console.log(circle);


function backword(){

  var imgActive = $(".images img.active");

  if (!imgActive.hasClass("first")) {

    imgActive.removeClass("active");
    imgActive.prev().addClass("active");

  } else {
     var lastImg = $("img.last")

     imgActive.removeClass("active");
     lastImg.addClass("active");
  }

  var circleActive = $(".fas.fa-circle.active")

  if (!circleActive.hasClass("first")) {

    circleActive.removeClass("active");
    circleActive.prev().addClass("active");

  } else {
    var lastCircle = $(".fas.fa-circle.last")

    circleActive.removeClass("active");
    lastCircle.addClass("active");
  }

}

function forward (){

  var imgActive = $(".images img.active");

  if (!imgActive.hasClass("last")) {

    imgActive.removeClass("active");
    imgActive.next().addClass("active");

  } else {
     var firstImg = $("img.first")

     imgActive.removeClass("active");
     firstImg.addClass("active");
  }

  var circleActive = $(".fas.fa-circle.active")

  if (!circleActive.hasClass("last")) {

    circleActive.removeClass("active");
    circleActive.next().addClass("active");

  } else {
    var firstCircle = $(".fas.fa-circle.first")

    circleActive.removeClass("active");
    firstCircle.addClass("active");
  }

}

prev.click(
  function (){

    backword();

  }
);


post.click(
  function (){

    forward();

  }
);

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
