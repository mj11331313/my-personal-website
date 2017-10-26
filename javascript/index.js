/**
 * Created by Administrator on 2017/9/19.
 */
$(function(){
    //光标闪烁修改内容：
    if( $("#introduce")[0].offsetWidth == 0 ){
        console.log("kong")
    };
    var $nav = $('#header-mask .nav-pills a');
    $nav.on('click',function(){
        $nav.removeClass('active');
        $(this).addClass('active');
    });
});
