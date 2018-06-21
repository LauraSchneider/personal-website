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
