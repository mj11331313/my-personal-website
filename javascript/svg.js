requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'   //封装路径：改写为jquery
    }
});
define(["jquery"],function($){
    function Svg(setting){
        this.$svg = $('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative; left: -0.5px;"></svg>');
        this.$des = $('<desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc>');
        this.$def = $('<defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>');
        this.$cir = $('<circle cx="76" cy="76" r="75" fill="none" stroke="#e4e4e4" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>');
        this.$text = $('<text x="76" y="76" text-anchor="middle" font="40px " + "Text Me One"+", sans-serif" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 40px; line-height: normal; font-family: &quot;Text Me One&quot;, sans-serif;"></text>');
        this.$tspan = $('<tspan dy="13.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">32%</tspan>');
        this.$path = $('<path fill="none" stroke="#16a6b6" d="M76,1A75,75,0,0,1,143.86202893495147,107.93344686738045" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>');
        this.defaultSetting = {
            width:152,
            height:152
        };
        $.extend(this.defaultSetting,setting);
    };
    Svg.prototype.add = function(){
        this.$svg.append(this.$des).append(this.$def).append(this.$cir).append(this.$text).append(this.$path);
        this.$text.append(this.$tspan);
        this.$svg.css({
            width:this.defaultSetting.width,
            height:this.defaultSetting.height
        });
    };
    return Svg;
});