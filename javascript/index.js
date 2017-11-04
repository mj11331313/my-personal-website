/**
 * Created by Administrator on 2017/9/19.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
var $Svg;
require(["jquery","svg"],function($,Svg){
    var setting = {
        width:152,
        height:152,
    };
    $Svg = new Svg(setting);
    $Svg.add();
});
$(function(){
    //加载动画效果控制:
    let $none = $('.none');
    $none.hide();
    //加载动画显示时禁用页面滚动条：
    $(document.body).css({
        "overflow-x":"hidden",
        "overflow-y":"hidden"
      });
    window.onload = function(){
        let $load = $('.load');
        let $loading = $('.loading');
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
    let $nav = $('#headerMask .nav-pills a');
    $nav.on('click',function(){
        $nav.removeClass('active');
        $(this).addClass('active');
    });

    //nav点击切换样式：
    $('#headerMask li').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })


    //动态添加skill圆圈：
    let $Div = document.createElement("div");
    let $container = $("#aboutMe .container");
    $($Div).append($Svg).addClass("col-md-3 col-sm-6 col-xs-12");
    for(let i = 0; i<=4 ; i++ ){
        $container.append($Div);
    }

    //skill导航点击样式：
    $("#projects-filters li").on("click",function(){
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    });

    //照片墙动态生成每一个div:
    let NUM = 8;
    var count = 0;
    var $Project = $("#photo-wall .container");
       //预加载图片：
    for(let i=0;i< NUM; i++ ){
        let $img = new Image();
        $img.onload = function(){
            count++;
            if(count == NUM){
                loadSuccess();
            }
        };
        $img.src = "../img/projects/" + (i+1) +".jpg";
    };
        //加载完成后：
    function loadSuccess(){
        for( let i = 0 ; i < NUM ; i++){
            let $div = document.createElement("div");
            let $span = document.createElement("span");
            $($div).css({
                backgroundImage:"../img/projects/"+ (i+1) +".jpg)"
            });
            $Project.append($div);
            $($div).append($span);
        }
    }
});
