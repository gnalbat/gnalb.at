function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY
    };
}

var footer = document.getElementsByTagName("footer");
var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

window.onload = function (e) {
    var offset = getOffset(footer[0]).bottom;
    if (offset < height) {
        footer[0].style.position = "absolute";
        footer[0].style.bottom = "0";
        footer[0].style.width = "100%";
    };
}