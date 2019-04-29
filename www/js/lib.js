$(document).ready(function() {
    // PC导航
    $('#hd .nav li').hover(function(event) {
        /* Act on the event */
        $(this).addClass('on');
    },
    function(){
        $(this).removeClass('on');
    });

    // 手机导航
    $(window).resize(function(event) {
        if( $(window).width()>959 ){
            $('.phone-nv').hide();
        }
    });
    $('#hd .menu-btn').click(function(event) {
        /* Act on the event */
        $('.phone-nv').stop().slideToggle();
    });
    $('.phone-nv li .a1').click(function(event) {
        /* Act on the event */
        $(this).parent('li').toggleClass('on').find('dl').stop().slideToggle();
        $(this).parent('li').siblings('li').removeClass('on').find('dl').stop().slideUp();
    });

    // 右侧浮动栏回到顶部
    $('.fixpop .go-top').click(function(){ 
       $('html, body').animate({scrollTop:0}, 'slow'); 
    });



    // 选项卡 鼠标经过切换
    $(".TAB li").mousemove(function(){
      var tab=$(this).parent(".TAB");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
      $(con).eq(on).show().siblings(con).hide();
    });

    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });

    // 动画
    $(document).ready(function() {
        if (! (/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            // 动画
            var wow = new WOW(
              {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true       // act on asynchronously loaded content (default is true)
              }
            );
        wow.init();
        };
    });

});