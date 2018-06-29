$(document).ready(function() {

    if (screen && screen.width > 991) {
        $('#fullpage').fullpage();
    }
    if (location.pathname !== '/loretta' && location.pathname !== '/laura') {
        $('#contact-button').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 'slow');
            return false;
        });
    }
});

var modal = $(".confirmation-modal");
var xmodal = $(".modal-x");

xmodal.on("click", function(e) {
    modal.css({
        display: "none"
    });
});

$(document).on('click', function(e) {
    modal.css({
        display: "none"
    });
})
