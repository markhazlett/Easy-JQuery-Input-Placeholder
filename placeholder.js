(function( $ ) {
  $.fn.addPlaceholder = function() {
    var input = $(this);

    input.focus(function() {
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    }).blur(function() {
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
      }
    }).blur().parents('form').submit(function() {
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    });
  };
})( jQuery );