$().ready(function(){
    var coll = ($(".slide")).length;
  var activElem = 0;
  function foo(){
    if (activElem<0){
      activElem = coll-1;
      var last = $(".slide").eq(-1).clone();
      last.prependTo(".slides");
      $(".slides").css("left","-100%");
      $(".slides").animate({left:0},function(){
      $(".slide").eq(0).remove();
      $(".slides").css({left:-100*(coll-1)+"%"});
      });
      $(".toggle").removeClass("active");
      $(".toggle").eq(activElem).addClass("active");
    } else if(activElem > coll-1){
      activElem = 0;
      var first = $(".slide").eq(0).clone();
       first.appendTo(".slides");
       $(".slides").css("left","-100%");
       $(".slides").animate({left:0},function(){
       $(".slide").eq(-1).remove();
       $(".slides").css({left:0});
       });
       $(".toggle").removeClass("active");
       $(".toggle").eq(activElem).addClass("active");
    }else{
      $(".toggle").removeClass("active");
      $(".toggle").eq(activElem).addClass("active");
      $(".slides").animate({left:-100*activElem+"%"});
    }
  }
    $(".toggle").on("click",function(){
    activElem=$(this).index();
    foo();
  });

  $(".arrowL").on("click",function(){
     activElem -= 1;
    foo();
  });

    $(".arrowR").on("click",function(){
     activElem += 1;
    foo();
  });

});
