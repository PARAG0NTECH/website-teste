(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";
    
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Funcionando","Inativos"],
            datasets: [{
                backgroundColor: [
                    "#36A355",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    alertaDisponibilidade(70, 55)

    function alertaDisponibilidade(totalMaquinas, maquinasAtivas) {
        var porcentagemMaquinasH5 = document.getElementById("porcentagemMaquinas");
        var pocentagemAtivas = (maquinasAtivas/totalMaquinas)* 100

        porcentagemMaquinasH5.innerHTML = `Suas máquinas tem uma<br> disponibilidade de <spam style="color: #36A355; font-size: 1.8rem">%${(pocentagemAtivas).toFixed(2)}</spam>`
    }


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Total Máquinas", "Reiniciadas"],
            datasets: [{
                backgroundColor: [
                    "#252525",
                    "#36A355",
                ],
                data: [70, 17]
            }]
        },
        options: {
            responsive: true
        }
    });

    alertaReiniciada(17)

    function alertaReiniciada(totalMaquinasReiniciadas) {
        var reiniciadasDiaH5 = document.getElementById("reiniciadasDia");
        var reiniciadasDia = (totalMaquinasReiniciadas / 24)

        reiniciadasDiaH5.innerHTML = `Em média, seus totens são <br>reicializados <span style="color: #36A355; font-size: 1.8rem">${(reiniciadasDia).toFixed(2)} vezes</span> por dia`
    }

    
})(jQuery);

// export { graficoDemandas }; not java
