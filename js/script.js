// 메인슬라이드 및 헤더
$(function(){
  //메인이미지 슬라이드
  $('.slider>ul>li').eq(0).show()

  let i = 0;
  function slide (){
    if(i<5){
      i++;
    } else {
      i=0;
    }
    $(".slider-btn>div").removeClass("active")
    $(".slider-btn>div").eq(i).addClass("active")
    $(".slide>ul>li").fadeOut(100);
    $(".slide>ul>li").eq(i).fadeIn(300);
  }

  let slideOut = setInterval(slide,4000)

  // 계단 버튼
  $(".content-btn li a").click(function(){
    $(".content-btn li a").removeClass("active")
    $(this).addClass("active")
  });



  $(".slider-btn>div").click(function(){
    let k = $(this).index()
    i=k
    clearTimeout(slideOut)
    $(".slide>ul>li").hide()
    $(".slide>ul>li").eq(k).show()
    $(".slider-btn>div").removeClass("active")
    $(".slider-btn>div").eq(i).addClass("active")
    slideOut=setInterval(slide,4000)
  })
  

  //왼쪽 상단 메뉴
  $(".sub").hide(0)
  $("nav>ul>li").mouseover(function(){
    $(this).children(".sub").stop().slideDown(300);
    $(".menu-bg").stop().slideDown(300);
  });
  $("nav>ul>li").mouseout(function(){
    $(this).children(".sub").stop().slideUp(300);
    $(".menu-bg").stop().slideUp(300);
  });

  // login 메뉴
  $(".login").click(function(){
    $('.h-sub').stop().slideDown()
  })
  $(".login").mouseleave(function(){
    $('.h-sub').stop().fadeOut(2000)
  })

  //  팝업메뉴
  $(function(){
    $(".open-btn").click(function(){
      $(".open-inner").show()
    });
    $(".s-close").click(function(){
      $(".open-inner").hide()
    });
  })

  // 서브3 탭메뉴
  $(".tab-list ul li").click(function(){
    let i =$(this).index()
    $(".sub-inner>div").hide()
    $(".sub-inner>div").eq(i).show()
    $(".tab-list ul li").removeClass("on")
    $(".tab-list ul li").eq(i).addClass("on")
    console.log(i)
  });

  // 반응형 메뉴
  $(".mobile-menu").click(function(){
    $(".madia-menu").stop().slideToggle();
  });
})


// 스페셜 오퍼
$(function(){
  let slides = document.querySelector('.s-box');
  let slide = document.querySelectorAll('.s-box>li');
  let index = 0;
  const slideCount = slide.length;
  console.log(slideCount);
  let slli = document.querySelector('.s-box>li'); //kim 이게 리스트 위쓰값 (css에서 위쓰값은 가져왓으나)
  const slideMagin = 20;    //kim 이게 마진레프트 값 (css에서 마진값은 어떻게 가져와야할지 모르겟음)
  const slideWidth = slli.scrollWidth;
  console.log(slideWidth)
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  slides.style.width = ( slideWidth  + slideMagin ) *slideCount - slideMagin + "px";

  function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMagin) + 'px';    //kim 이게 (리스트+마진래프트) 만큼 왼쪽으로 이동
    index = num;
  }

  next.addEventListener('click', function(){
    if(index < slideCount -3){
      moveSlide(index + 1);
    }else{
      moveSlide(0);
    }
  })

  prev.addEventListener('click', function(){
    if(index > 0){
      moveSlide(index - 1);
    }else{
      moveSlide(slideCount - 3);
    }
  })
})


// 객실
$(function(){
  let k = 0;
  $(".room").hide()
  $(".room").eq(0).show()
  function room (){
    if(k<1){k++;}
    else {k=0;}
    $(".room").fadeOut();
    $(".room").eq(k).fadeIn(1000);
  }
  setInterval(room, 4500)
})
// 다이닝
$(function(){
  let t = 0;
  $(".dining").hide()
  $(".dining").eq(0).show()
  function dining (){
    if(t<1){t++;}
    else {t=0;}
    $(".dining").fadeOut();
    $(".dining").eq(t).fadeIn(1000);
  }
  setInterval(dining, 4500)
})

  // 헤더
  $(function(){
    $(window).scroll(function(){
    var navbar = $(this).scrollTop();
    // console.log(navbar);
    var $header = $('header');
    if(navbar > 100){
        $header.addClass('activated');
    }else{
        $header.removeClass('activated');
    }
  })
})


