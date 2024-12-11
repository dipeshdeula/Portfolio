$(document).ready(function() {
    // Animate the text
    // $('.animate-text').animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '300px'
    // }, 'fast', function() {
    //     // Reset the properties after the animation
    //     $(this).animate({
    //         opacity: 1,
    //         height: 'auto',
    //         width: 'auto'
    //     }, 'fast');
    // });

    // Slide toggle effect
    $('.animate-text').slideToggle(1000, function() {
        // Slide toggle back to original state
        $(this).slideToggle(1000);
    });
});