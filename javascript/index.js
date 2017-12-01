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
            $loading.fadeOut();
            $none.show();
            //加载动画完成后显示页面滚动条：
            $(document.body).css({
                "overflow-x":"auto",
                "overflow-y":"auto"
              });
              window.scrollTo(0,0);
        },6000);
    };
    
    //我的标签样式：
    

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
    var NUM = 8;
    var count = 0;
    var $Project = $("#photo-wall .container");
       //预加载图片：
    for(var i=0;i< NUM; i++ ){
        var $img = new Image();
        var $img2 = new Image();
        var $li = document.createElement("li");
        var $a = document.createElement("a");
        $img.src="img/projects/"+ (i+1) +".jpg";
        $img2.src="img/projects2/"+ (i+1) +".jpg";
        $($li).addClass("col-md-3 col-sm-4 col-xs-6");
        $($img2).addClass("x-mask");
        $Project.append($li);
        $($li).append($a);
        $($a).append($img2).append($img);        
    };



    //导航菜单切换后点击按钮显示或隐藏菜单：
    let $topNav = $("#topNav nav");
    let $change=false;//标示位：改变图标
    $("#changeNav .glyphicon").on("click",function(){
        $topNav.stop().slideToggle();
        if($change){
            $(this).removeClass("glyphicon-align-justify").addClass("glyphicon-arrow-up").animate({
                "transform": "rotate(45deg)",
                "transition":"1s"//过渡效果存在问题
            })            
        }else{
            $(this).removeClass("glyphicon-arrow-up").addClass("glyphicon-align-justify").animate({
                "transform": "rotate(-45deg)"                      
            })
        };
        $change=!$change;
    });



    //点击向下的箭头页面向下滑动：
    var $sTop=$("#aboutMe")[0].offsetTop;
    $("img.pulse").on("click",function(){
        var $bTop=$(window).scrollTop();    
        var timer=setInterval(function(){
            window.scrollTo( 0,$bTop +=50 ) ;
             if( $bTop >= $sTop ){
                 clearInterval(timer);
             };
         },50);
    });


    //点击我的照片播放或暂停音乐：
    var $hello=$("#hello");
    var bFlag="true";
    $("#me").on("click",function(){
        if(bFlag){
            $("#vedio")[0].play();
        }else{
            $("#vedio")[0].pause();
        };
        bFlag=!bFlag;
        if(bFlag){
            $hello.text("click here to play music");
        }else{
            $hello.text("click here to stop music");
        };
    });
    

    //鼠标滑过我的照片时：
    $("#me").hover(function(){
        $hello.stop().css("opacity",1);
    },function(){
        $hello.stop().css("opacity",0);
    });



    $(".x-mask").on("mouseover",function(){
        $(this).stop().fadeOut();
    });
    $("#photo-wall .container li img").on("mouseout",function(){
        $(this).siblings(".x-mask").stop().fadeIn();
    })

