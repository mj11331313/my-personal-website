/**
 * Created by Administrator on 2017/9/19.
 */
$(function(){
    //加载动画效果控制:
    var $none = $('.none');
    $none.hide();
    window.onload = function(){
        var $load = $('.load');
        var $loading = $('.loading');
        setTimeout(function(){
            $load.fadeOut();
            $loading.hide();
            $none.show();
        },6000);
    };
    //光标闪烁修改内容：
    if( $("#introduce")[0].offsetWidth == 0 ){
        console.log("kong")
    };
    var $nav = $('#header-mask .nav-pills a');
    $nav.on('click',function(){
        $nav.removeClass('active');
        $(this).addClass('active');
    });

    //nav点击切换样式：
    $('#header-mask li').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
});
