$(document).ready(function () {
    // NAVBAR MOBILE
    $(".cross").hide();
    $(".menu").hide();
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    // CAROUSEL
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        navText: [
            '<button class="btn-carousel slick slick-prev"><i class="fas fa-chevron-left"></i></button>',
            '<button class="btn-carousel slick slick-next"><i class="fas fa-chevron-right"></i></button>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $(".prev").on("click", function () {
        $(".slick-prev").click();
    });

    $(".next").on("click", function () {
        $(".slick-next").click();
    });
});