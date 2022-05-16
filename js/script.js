
$(document).ready(function () {
    
    AOS.init();

    let menu_id = ['#home','#aboutme', '#portfoilo', '#life', '#contact',];
    let menu_pos = [];
    for (let i = 0; i < menu_id.length; i++) {
        menu_pos[i] = $(menu_id[i]).offset().top;
    }
    $(window).resize(function(){
        for (let i = 0; i < menu_id.length; i++) {           
            let temp = menu_id[i];
            menu_pos[i] = $(temp).offset().top;
        }
    });

    let header = $('.header');

    $(window).scroll(function () {
        let sc = $(window).scrollTop();
        if (sc >= 1) {
            header.addClass('header-active');
            $('.visual').css('padding-top', 90);
        } else {
            header.removeClass('header-active');
            $('.visual').css('padding-top', 0);
        }
    });

    let gnb_a = $('.mainmenu a');
    let logo = $('.logo');
    let f_logo = $('.footer-logo')
    $.each(gnb_a, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            $('html').animate({
                scrollTop: menu_pos[index]
            }, 500);
        });
    });
    $.each(logo, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            $('html').animate({
                scrollTop: menu_pos[index]
            }, 500);
        });
    });
    $.each(f_logo, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            $('html').animate({
                scrollTop: menu_pos[index]
            }, 500);
        });
    });
    

    var bar = new ProgressBar.Line(html, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#e44f26',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(css, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#33a9dc',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(0.95);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(js, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffd83a',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(0.80);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(jquery, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#1572b6',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(0.8);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(git, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#000',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(0.85);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(scss, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#cd62a9',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(0.85);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(vs, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#5b4282',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(0.75);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(vue, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#2fb982',
        trailColor: '#888',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '35px',
            top: '-10px',
            padding: 0,
            margin: 0,
        },
        autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });
    
    bar.animate(0.65);  // Number from 0.0 to 1.0

    var cc_img_box = new Swiper('.cc-img-box', {
        slidesPerView: 1,
        // spaceBetween: 30,
        autoplay: {
            delay: 1000000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.next_bt',
            prevEl: '.prev_bt',
        },
        on: {
            slideChange:function () {
                $('.cc-text-box').removeClass('cc-text-box-active');
                $('.cc-text-box').eq(this.realIndex).addClass('cc-text-box-active');
    
            }
        }
    });

    var words = ['Hello, I am developer Lee Junhong. I still have a lot of shortcomings, but I am a developer who has a lot of will to learn and tries hard. We will work hard every day to show you how we grow :)'
    ],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 10000,
    speed = 50;
    var wordflick = function () {
    setInterval(function () {
        if (forwards) {
        if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
            }
        }
        }
        else {
        if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
            i = 0;
            }
        }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
        if (forwards) {
            offset++;
        }
        else {
            offset--;
        }
        }
        $('.word').text(part);
    },speed);
    };

    $(document).ready(function () {
    wordflick();
    });
});