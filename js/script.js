$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(500)
    })
})
$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    
    var typed = new Typed(".typed", {
        strings: ["Software Engineer, Gratefully.", "Cambridge Graduate, Unbelievably.", "Manchester United Fan, Unfortunately."],
        typeSpeed: 70,
        loop: true,
        startDelay: 2000,
        showCursor: false,
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if($(window).scrollTop() > navTop) {
            body.css("padding-top", nav.outerHeight() + "px")
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0)
            body.removeClass("fixedNav");
        }

    }

});