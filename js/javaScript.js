$( document ).ready(function() {

    //sticky header
    window.onscroll = stickyHeader;

    let header = document.getElementById("header");
    let logoPxFromTop = header.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > logoPxFromTop) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky");
        }
    }

    //scroll to
    $('.header-navigation a').click(function(){
        let $href = $(this).attr('href');
        let $anchor = $($href).offset();

        $('html, body').animate({
            scrollTop: parseInt($anchor.top)
        }, 1000);
        return false;
    });

});
