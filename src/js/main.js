// On attend que la page soit totalement chargée :
$(document).ready(function () {
    // NAVBAR MOBILE
    $(".cross").hide();
    $(".menu").hide();
    // Ouverture du menu
    $(".hamburger").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });
    // Fermeture du menu
    $(".cross").click(function () {
        $(".menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    // CAROUSEL
    $(".owl-carousel").owlCarousel({
        // On autorise la boucle
        loop: true,
        // On applique un margin a chaque card
        margin: 20,
        // On retire la navigation par défaut
        nav: false,
        // Et on crée nos propres boutons
        navText: [
            '<button class="btn-carousel slick slick-prev"><i class="fas fa-chevron-left"></i></button>',
            '<button class="btn-carousel slick slick-next"><i class="fas fa-chevron-right"></i></button>'
        ],
        // Gestion du responsive
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