/**
 * Created by Administrator on 2017/9/19.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
require(["jquery","rotate"],function($,Rotate){
    var imgs1 = ["img/1.jpg","img/2.jpg"];
    var setting1 = {
        selector:"#photo-container",
        imgArr:imgs1,
        speed:4000
    };
    var rotate1 = new Rotate(setting1);
    rotate1.init();
});
$(function(){

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


    //回到主页(home)
    $("#home").on("click",function(){
        var timer=setInterval(function(){
            window.scrollTo( 0,ScrollTop -= 50 ) ;
            if(ScrollTop <=0 ){
                clearInterval(timer);
            }
        },30);
    });
});
