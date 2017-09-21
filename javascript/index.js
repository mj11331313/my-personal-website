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
    if( $("#introduce")[0].style.width == 0 ){
        $("#introduce").text("php developer").animate({
            width:'62%'
        },1000);
    }
});
