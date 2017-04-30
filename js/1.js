$(function(){
  // плавное открытие мобильного меню
  $('.beefburger').on('click',function(){
    $('.mob_menu').slideToggle(350,function(){
      if($(this).css('display')==='none'){
        $(this).removeAttr('style');
      }
    });
  });
  // закрытие моб меню по клике на пункт меню
  $('.mob_menu ul li').on('click',function(){
    if($(window).width() < 768){
      $('.mob_menu').slideToggle(350,function(){
        if($(this).css('display')==='none'){
          $(this).removeAttr('style');
        }
      });
    }
  });

  //проверка на валидацию
  $('.submit').on('click',function(){
    var a = $('input[name="phone"]').val();
    var b = $('input[name="email"]').val();
    if(a.length==0 && b.length==0 ){
      $(".required").addClass("active");
    }else{
      $('.sendMessage').addClass("active");
    }
  });
  $('.close').on('click',function(){
    $('.sendMessage').removeClass("active");
  });
  
//при клике на input пропадает placeholder
  $('input').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
    $(this).attr('placeholder','');
  });
  $('input').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });

// при клике на book now переход на форму
  $('button[name="button2"]').on('click',function(){
    $(this).mPageScroll2id({
      offset:0
    });
  });
});
