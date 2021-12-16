$(document).ready(function() {
    $('.myNameLatter').animate({ 'opacity': 1 }, 2000);

    if ($(window).width() < 550){
        $('.top-deco-img').attr('src', 'static/bg_deco/sm-topwave.svg');
    }


    $(".workParent").mouseenter(function() {
        $(".discrip").animate({ "bottom": "0%", "opacity": 1, "backgroundColor": "blue"}, 1000);
    });

    $(".workParent").mouseleave(function() {
        $(".discrip").animate({ "bottom": "-80%", "opacity": 0, "backgroundColor": "white",}, 1000);
    });

    const all_animate_element = document.querySelectorAll('.animate_element');

    all_animate_element.forEach((el) => {
        el.style.opacity = 0;
    })


    const elementInview = (el) => {
        const element_top = el.getBoundingClientRect().top;

        return (element_top <= $(window).height());
    }

    const displayScrollElement = (element) => {
        element.classList.add('chosenone');
        $('.chosenone').animate({ 'opacity': 1 }, 1500);
    }

    const animationHandler = () => {

        all_animate_element.forEach((el) => {
            if (elementInview(el)) {
                displayScrollElement(el);
            }
        });

    }


    $(window).scroll(function() {
        animationHandler();
    });
});