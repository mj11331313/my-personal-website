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


    //�����˸�޸����ݣ�
    if( $("#introduce")[0].offsetWidth == 0 ){
        console.log("kong")
    }
});
