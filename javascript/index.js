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
    $("#header-mask li").on("click",function(){
        if( $(this).hasClass("active") ){
            $(this).css("color","#337ab7");
        }else{
            $(this).css("color","#fff");
        }
        $(this).addClass("active").siblings().removeClass("active");
    });

    //箭头点击事件处理：
    $("#header-mask .pulse").on("click",function(){
        
    });
});
