var prev = $(".prev");
var post = $(".next");

prev.click(
  function (){

   var imgActive = $(".images img.active");

   if (!imgActive.hasClass("first")) {

     imgActive.removeClass("active");
     imgActive.prev().addClass("active");

   } else {
      var lastImg = $("img.last")

      imgActive.removeClass("active");
      lastImg.addClass("active");
   }

  }

);


post.click(
  function (){

   var imgActive = $(".images img.active");

   if (!imgActive.hasClass("last")) {

     imgActive.removeClass("active");
     imgActive.next().addClass("active");

   } else {
      var firstImg = $("img.first")

      imgActive.removeClass("active");
      firstImg.addClass("active");
   }

  }
);
