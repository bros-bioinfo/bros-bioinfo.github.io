var page = $("li").find("li[data-custom]");
page.each(function() {
    if ($(this).attr('data-custom') > 10) {
        $(this).addClass('larger-than-1000'); // Or whatever
    }
});
