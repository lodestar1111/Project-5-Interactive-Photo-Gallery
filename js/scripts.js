lightbox.option({
    fitImagesInViewport: true,
    wrapAround: true
});

$(document).ready(function () {
    $("#search").hideseek({
        nodata: "No results found",
        attribute: "data-title"
    });
});