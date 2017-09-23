/**
 * Created by Administrator on 2017/9/19.
 */
$(function(){
    //setInterval(function(){
    //    ChangeImg();
    //},1000);
    function ChangeImg(){
        $("header img[class='selected']").removeClass("selected").siblings("img").addClass("selected");
    };


    //光标闪烁修改内容：
    if( $("#introduce")[0].offsetWidth == 0 ){
        console.log("kong")
    };


    //top菜单点击切换样式：
    $("#header-mask .top-nav li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    //箭头点击事件处理：
    var ScrollTop = document.documentElement.scrollTop;
    $("#header-mask .pulse").on("click",function(){
        //$(document).scrollTop($("#middle").offset().top);
        var timer=setInterval(function(){
            window.scrollTo( 0,ScrollTop += 50 ) ;
            if(ScrollTop >= $("#middle").offset().top){
                clearInterval(timer);
            }
        },30);
    });
    $("#home").on("click",function(){
        var timer=setInterval(function(){
            window.scrollTo( 0,ScrollTop -= 50 ) ;
            if(ScrollTop <=0 ){
                clearInterval(timer);
            }
        },30);
    });
});
