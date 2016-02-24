// Your custom scripts here

// Contact Form submission
$('.contact-form').submit(function () {

    var name, email, msg;

    name = $('#contact-name').val();
    email = $('#contact-email').val();
    msg = $('#contact-msg').val();

    $.get("/contact", { name: name, email: email, msg: msg}, function (data) {
        if (data === "Success") {
            $('.send').html("Thanks! We'll be in touch shortly...");
        }
    });
});