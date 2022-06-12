$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $(".btn").fadeIn("slow");
        }
        else {
            $(".btn").fadeOut("slow");
        }
    })

    $(".gotop").click(function () {
        $("body,html").animate({
            "scrollTop": 0
        }, "slow")
    })

    $(".navBtn").click(function(){
        $(this).toggleClass("active");
        $(".navBtn .m").fadeToggle("fast");
    })

    $(".navBtn").click(function(){
        $(".mobNavbar").slideToggle("slow");
    })
})