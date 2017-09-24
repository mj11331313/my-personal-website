/**
 * Created by Administrator on 2017/9/24.
 */
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});
define(["jquery"],function($){
    function Rotate(settings){
        this.defaultSettings = {
            selector: document.body,
            imgArr:[],
            speed:500,
        };
        $.extend(this.defaultSettings,settings);
        this.$container = $('<div class="rotate-container"></div>');
        this.$img = $('<div class="rotate-img"></div>');
    };
    Rotate.prototype.init = function(){
        this.$container.append(this.$img);
        for( var i = 0 ;i < this.defaultSettings.imgArr.length; i++ ){
            this.$img.append("<img src='"+this.defaultSettings.imgArr[i] +"'>");
        };
        var timer;
        var that = this;
        this.nowIndex = 0 ;
        $("img",this.$img).eq(0).addClass("selected");
        $(this.defaultSettings.selector).append(this.$container);
        play();
        function play(){
            timer = setInterval(function(){
                that.nowIndex ++ ;
                if( that.nowIndex == that.defaultSettings.imgArr.length ) that.nowIndex = 0 ;
                $("img",that.$img).eq(that.nowIndex).fadeIn("slow").siblings().fadeOut("slow");
            },that.defaultSettings.speed);
        }
    };
    return Rotate;
});
