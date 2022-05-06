$(document).ready(function () {
    AOS.init();

    let menu_id = ['#aboutme', '#portfoilo', '#life', '#contact'];
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

    let footer_a = $('.footer-menu a');
    let gnb_a = $('.mainmenu a');
    $.each(gnb_a, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            $('html').animate({
                scrollTop: menu_pos[index]
            }, 500);
        });
    });
    $.each(footer_a, function (index, item) {
        $(this).click(function (event) {
            event.preventDefault();
            $('html').animate({
                scrollTop: menu_pos[index]
            }, 500);
        });
    });
    // c0d4f5 9ddafa 8093e8 1ca1ef 1477c6 000d49
    var mbti_1 = new ProgressBar.Circle(mbti_i, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#000d49',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    mbti_1.animate(0.65);  // Number from 0.0 to 1.0

    var mbti_2 = new ProgressBar.Circle(mbti_s, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#1ca1ef',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    mbti_2.animate(0.61);  // Number from 0.0 to 1.0

    var mbti_3 = new ProgressBar.Circle(mbti_t, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#8093e8',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    mbti_3.animate(0.54);  // Number from 0.0 to 1.0

    var mbti_4 = new ProgressBar.Circle(mbti_j, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#c0d4f5',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    mbti_4.animate(0.76);  // Number from 0.0 to 1.0

    $('#mbti_i').waypoint(function(dir) {
        if(dir=="down") {
            mbti_1.animate(0.65);
        }else{
            mbti_1.animate(0.0);
        }
    }, 
    { 
        offset: '90%' 
    });
    $('#mbti_s').waypoint(function(dir) {
        if(dir=="down") {
            mbti_2.animate(0.61);
        }else{
            mbti_2.animate(0.0);
        }
    }, 
    { 
        offset: '90%' 
    });
    $('#mbti_t').waypoint(function(dir) {
        if(dir=="down") {
            mbti_3.animate(0.54);
        }else{
            mbti_3.animate(0.0);
        }
    }, 
    { 
        offset: '90%' 
    });
    $('#mbti_j').waypoint(function(dir) {
        if(dir=="down") {
            mbti_4.animate(0.76);
        }else{
            mbti_4.animate(0.0);
        }
    }, 
    { 
        offset: '90%' 
    });

    var bar = new ProgressBar.Line(html, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#e44f26',
        trailColor: '#eee',
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
        trailColor: '#eee',
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

    var bar = new ProgressBar.Line(js, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffd83a',
        trailColor: '#eee',
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
    
    bar.animate(0.90);  // Number from 0.0 to 1.0

    var bar = new ProgressBar.Line(jquery, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#1572b6',
        trailColor: '#eee',
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

    var bar = new ProgressBar.Line(git, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#000',
        trailColor: '#eee',
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

    var bar = new ProgressBar.Line(scss, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#cd62a9',
        trailColor: '#eee',
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

    var bar = new ProgressBar.Line(bs, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#5b4282',
        trailColor: '#eee',
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

    var bar = new ProgressBar.Line(vue, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#2fb982',
        trailColor: '#eee',
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
    
    bar.animate(0.7);  // Number from 0.0 to 1.0

    let cc_img = $('.cc-img-box div');
    let cc_text_box = $('.cc-text-box');
    let sw_title = $('.swiper-title')
    $.each(sw_title, function (index, item) {

        $(this).click(function (event) {
            event.preventDefault();

            // 메뉴의 포커스를 제거한다.
            cc_img.removeClass('cc-img-active')
            cc_img.eq(index).addClass('cc-img-active');

            // 내용의 포커스를 제거한다.
            cc_text_box.removeClass('cc-text-box-active');
            cc_text_box.eq(index).addClass('cc-text-box-active');
        });

    });


    var sw_cc = new Swiper('.sw-cc', {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        mousewheel: true,
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