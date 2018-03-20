scrollHide();
window.onbeforeunload = function (){ 
    if(!(event.clientX>document.body.clientWidth && event.clientY < 0 || event.altKey)){ 
        window.scrollTo(0,0);
    }
}
$(document).ready(function(){
    $('p#en-introduce').beatText({isAuth:false,isRotate:false});
    $('p#ch-introduce').beatText({isAuth:false,isRotate:false});
})
window.onload = function(){
    setTimeout(function(){
        $(".wrapper").fadeOut(600,function(){
            $(".Quick-navigation").css({
                "display":"block",
                "transitionDelay":500
            });
            scrollShow();
            $("#projects-filters li:eq(0)").trigger('click');
        });
    },7500);
}

$("#A")[0].oncontextmenu = function(){
    $(document).trigger('contextmenu');
};

$('#A')[0].onselectstart = function(){
    return false;
};

function scrollHide(){
    $(document.body).css({
        "overflow-x":"hidden",
        "overflow-y":"hidden",
    })
}
function scrollShow(){
    $(document.body).css({
        "overflow-x":"auto",
        "overflow-y":"auto",
    })
}
function throttle(fn, delay, scope) {
    delay = delay || 250;
    var last, defer;
    return function () {
        var context = scope || this,
            now = +new Date(),
            args = arguments;
        if (last && now < last + delay) {
            clearTimeout(defer);
            defer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, delay);
        } else {
            last = now;
            fn.apply(context, args);
            }
        }
}

function extend(destination, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            destination[k] = source[k];
        }
    }
    return destination;
}

var SManager = (function () {

    var defaults = {

        steps: null,
        navigationContainer: null,
        links: null,
        scrollToTopBtn: null,

        navigationElementClass: '.Quick-navigation',
        currentStepClass: 'current',
        smoothScrollEnabled: true,
        stepsCheckEnabled: true,

        onScroll: null,

        onStepChange: function (step) {
            var self = this;
            var relativeLink = [].filter.call(options.links, function (link) {
                link.classList.remove(self.currentStepClass);
                return link.hash === '#' + step.id;
            });
            relativeLink[0].classList.add(self.currentStepClass);
        },

        smoothScrollAnimation: function (target) {
            $('html, body').animate({
                scrollTop: target
            }, 'slow');
        }
    },

    options = {};

    var _animation = null,
        currentStep = null,
        throttledGetScrollPosition = null;

    return {

        scrollPosition: 0,

        init: function (opts) {

            options = extend(defaults, opts);

            if (options.steps === null) {
                console.warn('Smooth scrolling require some sections or steps to scroll to :)');
                return false;
            }

            _animation = function (target) {
                target = typeof target === 'number' ? target : $(target).offset().top;
                return options.smoothScrollAnimation(target);
            };

            if (options.smoothScrollEnabled)  this.smoothScroll();

            if (options.scrollToTopBtn) {
                options.scrollToTopBtn.addEventListener('click', function () {
                options.smoothScrollAnimation(0);
            });
        }

        throttledGetScrollPosition = throttle(this.getScrollPosition).bind(this);
        window.addEventListener('scroll', throttledGetScrollPosition);
        window.addEventListener('resize', throttledGetScrollPosition);

        this.getScrollPosition();
    },

    getScrollPosition: function () {
        this.scrollPosition = window.pageYOffset || window.scrollY;
        if (options.stepsCheckEnabled) this.checkActiveStep();
        if (typeof  options.onScroll === 'function') options.onScroll(this.scrollPosition);
    },

    scrollPercentage: function () {
        var body = document.body,
            html = document.documentElement,
            documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight);

        var percentage = Math.round(this.scrollPosition / (documentHeight - window.innerHeight) * 100);
        if (percentage < 0)  percentage = 0;
        if (percentage > 100)  percentage = 100;
        return percentage;
    },

    doSmoothScroll: function (e) {
        if (e.target.nodeName === 'A') {
            e.preventDefault();
            if (location.pathname.replace(/^\//, '') === e.target.pathname.replace(/^\//, '') && location.hostname === e.target.hostname) {
                var targetStep = document.querySelector(e.target.hash);
                targetStep ? _animation(targetStep) : console.warn('Hi! You should give an animation callback function to the Scroller module! :)');
            }
        }
    },

    smoothScroll: function () {
        if (options.navigationContainer !== null) options.navigationContainer.addEventListener('click', this.doSmoothScroll);
    },

    checkActiveStep: function () {
        var scrollPosition = this.scrollPosition;

        [].forEach.call(options.steps, function (step) {
            var bBox = step.getBoundingClientRect(),
                position = step.offsetTop,
                height = position + bBox.height;

            if (scrollPosition >= position && scrollPosition < height && currentStep !== step) {
                currentStep = step;
                step.classList.add(self.currentStepClass);
                if (typeof options.onStepChange === 'function') options.onStepChange(step);
            }
            step.classList.remove(options.currentStepClass);
        });
    },

    destroy: function () {
                window.removeEventListener('scroll', throttledGetScrollPosition);
                window.removeEventListener('resize', throttledGetScrollPosition);
                options.navigationContainer.removeEventListener('click', this.doSmoothScroll);
            }
        }
    })();


    var scrollToTopBtn = document.querySelector('.Scroll-to-top'),
        steps = document.querySelectorAll('.js-scroll-step'),
        navigationContainer = document.querySelector('.Quick-navigation'),
        links = navigationContainer.querySelectorAll('a');
        SManager.init({
            steps: steps,
            scrollToTopBtn: scrollToTopBtn,
            navigationContainer: navigationContainer,
            links: links,
            onScroll: function () {
                var percentage = SManager.scrollPercentage();
                percentage >= 90 ? scrollToTopBtn.classList.add('visible') : scrollToTopBtn.classList.remove('visible');
        },
});


var NUM = 8;
var $Projects = $("#photo-wall .container");
var $all = [] , $websites = [], $apps = [], $others = [];
for(var i=0;i< NUM; i++ ){
    let $img = new Image();
    let $li = document.createElement("li");
    let $a = document.createElement("a");
    $img.src="img/"+ (i+1) +".jpg";
    $($li).addClass("col-md-3 col-sm-4 col-xs-6");
    $Projects.append($li);
    $($li).append($a);
    $($a).append($img);
    $all.push($li);    
    if( i == 0 || i == 3 || i == 4 ){
        $websites.push($li);
    }else if( i == 1 || i == 2 ){
        $apps.push($li);
    }else{
        $others.push($li);
    }     
};

$ulPrent = $('#photo-wall .container');
$("#projects-filters li").on("click",function(){
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $ulPrent.children('li').detach();
    let $flag = $(this).index();
    switch ($flag) {
        case 1 : $ulPrent.append($websites); break;
        case 2 : $ulPrent.append($apps); break;
        case 3 : $ulPrent.append($others); break;
        default: $ulPrent.append($all);
    }
});

$('#photo-wall .container img').hover(function(){
    $(this).css('filter','grayscale(0)');
},function(){
    $(this).css('filter','grayscale(100%)');
});

$("#submit").on("click",function(){
    return false;
})


$('.show-img').each(function(index,elem){
    $(this).hover(function(){
        $('.hide-img').eq(index).stop().css('opacity',1);
    },function(){
        $('.hide-img').eq(index).stop().css('opacity',0);
    })
})



