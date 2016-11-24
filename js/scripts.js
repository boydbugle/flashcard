$('.top').on('click', function() {
  $p_box = $(this).closest('.box');
  $p_box.siblings().find('.bottom').hide();
  $p_box.find('.bottom').toggle();
});


  