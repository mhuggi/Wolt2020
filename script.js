$(document).ready(function () {
    var cCount = 0;
    $.getJSON("data.json", function (result) {
        $.each(result.restaurants, function (i, field) {
            var name = field.name;
            var des = field.description;
            var pic = field.image;
            var tags = field.tags.toString().replace(",", " ");
            cCount++;
            var containName = "contain" + cCount;

            $("#container").append(createContainer(containName, name));
            $("#" + containName).append(createImg(pic, tags));
            $("#" + containName).append(createHeader(name));
            $("#" + containName).append(createDesc(des));
        });
    });

});
var sorted = false;
$('#alphSort').on('click', function () {
    var alphOrd = $('.picContain').sort(function (a, b) {
        if (sorted == false) {
            return String.prototype.localeCompare.call($(a).text(), $(b).text());
        } else {
            return String.prototype.localeCompare.call($(b).text(), $(a).text());
        }

    });
    if (sorted == false) {
        sorted = true;
    } else {
        sorted = false;
    }
    var container = $(".container");
    container.detach().empty().append(alphOrd);
    $('body').append(container);
    

});


function createContainer(value, n) {
    return $('<div>', {
        id: value,
        class: "picContain",
        value: n

    });
}
function createImg(img, n) {
    return $('<img>', {
        src: img,
        class: "imgId",
        alt: n
    });
}
function createHeader(s) {
    return $('<div>', {
        class: "textHead",
        text: s
    });
}
function createDesc(s) {
    return $('<div>', {
        class: "descText",
        text: s
    });
}
