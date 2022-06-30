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

    $(".navBtn").click(function () {
        $(this).toggleClass("active");
        $(".navBtn .m").fadeToggle("fast");
    })

    $(".navBtn").click(function () {
        $(".mobNavbar").slideToggle("slow");
    })
})
 
let p = document.querySelector('.profile');
let arr = ['A', ' ', 'F', 'R', 'O', 'N', 'T', '-', 'E', 'N', 'D', ' ', 'D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R']
let i = 0;
let id = setInterval(() => {
    if (arr[i] == arr[i]) {
        document.querySelector(".profile").innerHTML += arr[i];
        i++;
    }
    if (i == arr.length) {
        clearInterval(id);
    }
}, 150);

let n = document.querySelector(".wrap-1 h1 a");
setInterval(() => {
    let c = getComputedStyle(n).color;
    if (c == "rgb(255, 255, 255)") {
        n.style.color = "rgb(218, 233, 52)"
    }
    else {
        n.style.color = "rgb(255, 255, 255)";
    }
}, 400);
