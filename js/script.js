$(document).ready(function () {
    AOS.init();

    let menu_id = ['#aboutme', '#portfoilo', '#life', '#contact'];
    let menu_pos = [];
    for (let i = 0; i < menu_id.length; i++) {
        menu_pos[i] = $(menu_id[i]).offset().top - 110;
    }
    $(window).resize(function(){
        for (let i = 0; i < menu_id.length; i++) {           
            let temp = menu_id[i];
            menu_pos[i] = $(temp).offset().top - 110;
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

    var mbti_1 = new ProgressBar.Circle(mbti_i, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#4298b4',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    mbti_1.animate(0.65);  // Number from 0.0 to 1.0

    var mbti_2 = new ProgressBar.Circle(mbti_s, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#e4ae3a',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    mbti_2.animate(0.61);  // Number from 0.0 to 1.0

    var mbti_3 = new ProgressBar.Circle(mbti_t, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#33a474',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    
    mbti_3.animate(0.54);  // Number from 0.0 to 1.0

    var mbti_4 = new ProgressBar.Circle(mbti_j, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#88619a',
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


    let sw_cc = new Swiper('.sw-cc', {
        slidesPerView: 3,
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        spaceBetween: 50,
        navigation: {
            nextEl: '.sw-slide-next',
            prevEl: '.sw-slide-prev',
        },
    });
});