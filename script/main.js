$(document).ready(function(){
  
    let gnb=$('.h_bottom .gnb')

    gnb.hover(function(){//마우스 오버시 동작
        $('.h_bottom').stop().animate({'height':'270px'},500)

        //서브메뉴 fadein하기
        $('.sub').stop().fadeIn();
    
    },function(){//마우스 아웃시 동작
        $('.h_bottom').stop().animate({'height':'46px'},500)
        //서브메뉴 fadeout하기
        $('.sub').stop().fadeOut();
    })

        //메인슬라이드 구현
    let mslide=$('.m_slide ul');
    let s_img=$('.m_slide img').width();//이미지 크기를 변수에 저장한다.


    // 마지막 슬라이드를 맨처음 슬라이드 앞으로 자리를 옮긴다.
    $('.m_slide ul>li:last-child').insertBefore('.m_slide ul>li:first-child');
    // mslide.css('margin-left','-1600px');
    mslide.css('margin-left',-s_img);

    $(window).resize(function(){
        s_img=$('.m_slide img').width();
    })
    //함수-왼쪽방향으로 움직이는 슬라이드 
    function moveLeft(){
        mslide.animate({'margin-left':-(s_img*2)},500,function(){
            $('.m_slide ul>li:first-child').insertAfter('.m_slide ul>li:last-child')
            mslide.css('margin-left',-s_img)//원래 위치로 
        });
    }

    let Timer=setInterval(moveRight, 3000);

    //함수-오른쪽방향으로 움직이는 슬라이드
    function moveRight(){
        mslide.animate({'margin-left':'0px'},500,function(){
            $('.m_slide ul>li:last-child').insertBefore('.m_slide ul>li:first-child')
            mslide.css('margin-left',-s_img)//원래 위치로
        });

    }

    // 스크롤 스파이
    console.log(window.scrollY);

    const spyEl=document.querySelectorAll('article.scroll-spy')

    spyEl.forEach(function(spyEl){

    new ScrollMagic
    .Scene({// 감시할 장면을 추가
        triggerElement:spyEl,
        triggerHook:0.7 // 화면의 70%지점에서 동작
    })
    .setClassToggle(spyEl,'show')//sohw클래스를 적용하거나 해제하기
    .addTo(new ScrollMagic.Controller());//컨트롤로에 장면을 할당한다.
})


});
    
    