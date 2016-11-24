$('.top').on('click', function() {
    $p_box = $(this).closest('.box');
    $p_box.siblings().find('.bottom').hide();
    $p_box.find('.bottom').toggle(200);
});

$("h2").click(function() {
    $("body").toggleClass("black-background");
});

// $("h2").click(function() {
//   $("body").removeClass();
//   $("body").addClass("white-background");
// });
