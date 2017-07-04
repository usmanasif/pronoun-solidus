$(document).on('click', '#signup', function(e) {
  e.stopPropagation();
  $('#login-dp').addClass('hide');
  $('#signup-dp').removeClass('hide');
});
$(document).on('click', '#login', function(e) {
  e.stopPropagation();
  $('#login-dp').removeClass('hide');
  $('#signup-dp').addClass('hide');
});