$().ready(function(){
  var show = true;
  //плавный scroll меню
  $(".menu a, .arrowTop a").mPageScroll2id({
    offset:100
  });
  // $("html body").animate({
  //   scrollTop:$(".menu a").offset().top});

  // "бегущие цифры"
  $(window).on("scroll",function(){
    if (!show) {
      return false;
    }
    var w_top = $(window).scrollTop();
    var e_top = $(".fon3").offset().top;
    if (w_top+150 >= e_top) {
      $(".spincrement").spincrement({
        thousandSeparator: '',
        duration:1200
      });
      show = false;
    }
  });

  //фиксированное меню
  $(window).on("scroll",function(){
    var w_top = $(window).scrollTop();
    // $(".fonForMenu").slideDown(400);
      $(".fonForMenu, .top").addClass("active");
    if (w_top==0) {
      $(".fonForMenu, .top").removeClass("active");
    }
  });
  //слайдел для experience 320px
  $(".toggle_experience").on("click",function(){
    $(".toggle_experience").removeClass("active");
    $(".experience").removeClass("active");
    $(".toggle_experience").eq($(this).index()).addClass("active");
    if($(this).index()==0){
      $(".exp1").addClass("active");
    }else{
      $(".exp2").addClass("active");
    }
  });
  //слайдел для all 320px
  $(".toggle_h").on("click",function(){
    $(".toggle_h").removeClass("active");
    $(".part").removeClass("active");
    $(".toggle_h").eq($(this).index()).addClass("active");
    if($(this).index()==0){
      $(".exp11").addClass("active");
    }else{
      $(".exp22").addClass("active");
    }
  });

});
