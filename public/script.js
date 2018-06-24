$(document).ready(function() {
    $('#fullpage').fullpage();
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
var overlayModal = $(".overlayModal");


xmodal.on("click", function(e) {
    console.log("are we here?");
    modal.css({
        display: "none"
    });
    overlayModal.css({
        display: "none"
    });
});
