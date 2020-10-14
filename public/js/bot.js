var svar = ['voff', 'voff!voff!voff!', 'voff!voff! =)', 'voff!voff!voffvoff!', 'VOFF!!!', ];
var feil = 'Princess venter på et spørsmål';
var vent = "<div class='venter'>Princess skriver</div>";


function nyttSvar() {
    document.getElementById('output').innerHTML = ' ';
    document.getElementById('input').innerHTML = ' ';

    var x = document.getElementById('spm').value;
    document.getElementById('spm').value = ' ';
    var store = x.toUpperCase();

    if (x === '') {
        document.getElementById('output').innerHTML = feil;
    } else if (store === 'HVA HETER DU?') {
        document.getElementById('input').innerHTML =
            "<div class='media'>" +
            " <div class='media-body'>" +
            "<h4 class='media-heading'>Du spør:</h4>" +
            "<p>" + x + "</p>" +
            "</div>" +
            "<div class='media-right'>" +
            "<span class='glyphicon glyphicon-user'></span>" +
            "</div>" +
            "</div>" +
            "<hr>";
        document.getElementById('output').innerHTML =
            "<div class='media'>" +
            "<div class='media-body'>" +
            "<h4 class='media-heading'>" + vent + "</h4>" +
            "</div>" +
            "</div>" +
            "<hr>";
        setTimeout(function() {
            document.getElementById('output').innerHTML =
                "<div class='media'>" +
                " <div class='media-left'>" +
                "<img src='img/logo_rosa.png' class='media-object' style='width:60px'>" +
                "</div>" +
                "<div class='media-body'>" +
                "<h4 class='media-heading'>Princess svarer:</h4>" +
                "<p>Princess Isa Dora! =)</p>" +
                "</div>" +
                "</div>" +
                "<hr>"
        }, 4000);
    } else {
        document.getElementById('spm').value = '';
        var randomSvar = Math.floor(Math.random() * (svar.length));
        document.getElementById('input').innerHTML =
            "<div class='media'>" +
            " <div class='media-body'>" +
            "<h4 class='media-heading'>Du spør:</h4>" +
            "<p>" + x + "</p>" +
            "</div>" +
            "<div class='media-right'>" +
            "<span class='glyphicon glyphicon-user'></span>" +
            "</div>" +
            "</div>" +
            "<hr>";
        document.getElementById('output').innerHTML =
            "<div class='media'>" +
            "<div class='media-body'>" +
            "<h4 class='media-heading'>" + vent + "</h4>" +
            "</div>" +
            "</div>" +
            "<hr>";
        setTimeout(function() {
            document.getElementById('output').innerHTML =
                "<div class='media'>" +
                " <div class='media-left'>" +
                "<img src='img/logo_rosa.png' class='media-object' style='width:60px'>" +
                "</div>" +
                "<div class='media-body'>" +
                "<h4 class='media-heading'>Princess:</h4>" +
                "<p>" + svar[randomSvar] + "</p>" +
                "</div>" +
                "</div>" +
                "<hr>"
        }, 4000);
    }

}