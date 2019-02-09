jQuery(function($){
    $('.header__subtitle').slick({
        prevArrow: "<div class='header__slick-arrows header__slick-arrowleft'></div>",
        nextArrow: "<div class='header__slick-arrows header__slick-arrowright'></div>",
        autoplay: true,
        speed: 500
    });


    // клик по кнопкам этажей

    $(".options-bottom__gallery-1-1").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/1.jpg"
            },{
                src  : "img/2.jpg"
            },{
                src  : "img/3.jpg"
            }
        ], {
            loop : false
        });
    });
    $(".options-bottom__gallery-2-1").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/11.jpg"
            },{
                src  : "img/22.jpg"
            },{
                src  : "img/33.jpg"
            }
        ], {
            loop : false
        });
    });

    $(".options-bottom__gallery-1-2").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/1.jpg"
            },{
                src  : "img/2.jpg"
            },{
                src  : "img/3.jpg"
            }
        ], {
            loop : false
        });
    });
    $(".options-bottom__gallery-2-2").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/11.jpg"
            },{
                src  : "img/22.jpg"
            },{
                src  : "img/33.jpg"
            }
        ], {
            loop : false
        });
    });

    $(".options-bottom__gallery-1-3").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/1.jpg"
            },{
                src  : "img/2.jpg"
            },{
                src  : "img/3.jpg"
            }
        ], {
            loop : false
        });
    });
    $(".options-bottom__gallery-2-3").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/11.jpg"
            },{
                src  : "img/22.jpg"
            },{
                src  : "img/33.jpg"
            }
        ], {
            loop : false
        });
    });


    // клик по картинке

    $(".options-bottom__townhouse-img-1-1").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/111.jpg"
            },{
                src  : "img/222.jpg"
            }
        ], {
            loop : false
        });
    });
    $(".options-bottom__townhouse-img-1-2").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/111.jpg"
            },{
                src  : "img/222.jpg"
            }
        ], {
            loop : false
        });
    });
    $(".options-bottom__townhouse-img-1-3").click(function () {
        jQuery.fancybox.open([
            {
                src  : "img/111.jpg"
            },{
                src  : "img/222.jpg"
            }
        ], {
            loop : false
        });
    });


    var initialWidth = $(".location-map__img img").width();
    var maxWidth = initialWidth*2;

    var initalHeight = $(".location-map__img").height();

    $(".zoom-control__zoom-in button").on('click', function(e){

        var width = $(".location-map__img img").width();
        width += 300;
        if(width < maxWidth){
            $(".location-map__img img").width(width);
            $(".location-map__img").height(initalHeight);
            $(".location-map__img img").css({
                "-moz-transition": "all 0.6s ease-out",
                "-o-transition": "all 0.6s ease-out",
                "-webkit-transition": "all 0.6s ease-out"
            });
        } else {
            return false;
        }
        $(".location-map__img img").width(width);
    });

    $(".zoom-control__zoom-out button").on('click', function(){
        var width = $(".location-map__img img").width();
        width -= 300;
        if(width > initialWidth){
            $(".location-map__img img").width(width);
            $(".location-map__img img").css({
                "-moz-transition": "all 0.6s ease-out",
                "-o-transition": "all 0.6s ease-out",
                "-webkit-transition": "all 0.6s ease-out"
            });
        } else {
            $(".location-map__img img").width(initialWidth);
        }

    });

    $(".location-map__img").on('mousedown', function(){
        $(".location-map__img img").css({
            'cursor': 'grabbing'
        })
    });

    $(".location-map__img").on('mouseup', function(){
        $(".location-map__img img").css({
            'cursor': 'grab'
        })
    });

    $(window).resize(function() {
        // удаляем атрибуты width и height
        $(".location-map__img img").removeAttr("width").css({ width: "" });

        // получаем заветные цифры
        var width  = $(".location-map__wrap").width();
        $(".location-map__img img").css({
            "-moz-transition": "none",
            "-o-transition": "none",
            "-webkit-transition": "none"
        });
        $(".location-map__img img").width(width);
        initialWidth = $(".location-map__img img").width();
        var initalImgHeight = $(".location-map__img img").height();
        maxWidth = initialWidth*2;
        $(".location-map__img").height(initalImgHeight);
        initalHeight = $(".location-map__img").height();
    });



});