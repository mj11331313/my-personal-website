/**
 * Created by Administrator on 2017/9/19.
 */
$(function(){
    //加载动画效果控制:
    var $none = $('.none');
    $none.hide();
    //加载动画显示时禁用页面滚动条：
    $(document.body).css({
        "overflow-x":"hidden",
        "overflow-y":"hidden"
      });
    window.onload = function(){
        var $load = $('.load');
        var $loading = $('.loading');
        setTimeout(function(){
            $load.fadeOut();
            $loading.hide();
            $none.show();
            //加载动画完成后显示页面滚动条：
            $(document.body).css({
                "overflow-x":"auto",
                "overflow-y":"auto"
              });
              window.scrollTo(0,0);
        },6000);
    };
    
    //光标闪烁修改内容：
    if( $("#introduce")[0].offsetWidth == 0 ){
        console.log("kong")
    };
    var $nav = $('#headerMask .nav-pills a');
    $nav.on('click',function(){
        $nav.removeClass('active');
        $(this).addClass('active');
    });

    //nav点击切换样式：
    $('#headerMask li').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
  
});
