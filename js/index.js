var typingTimer;
var doneTypingInterval = 3000;
var $email = $('#emailField');

//on keyup, start the countdown
$email.on('keyup', function () {
  $('#emailField').removeClass('is-danger');
  $('#emailField').removeClass('is-success');
  $('#emailIcon').removeClass('fa-check');
  $('#emailIcon').removeClass('fa-exclamation-triangle');
  $('#emailLabel').html('');
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown
$email.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(regex.test($email.val())) {
     $('#emailField').addClass('is-success');
     $('#emailIcon').addClass('fa-check');
   } else {
     $('#emailField').addClass('is-danger');
     $('#emailIcon').addClass('fa-exclamation-triangle');
     $('#emailLabel').html('invailed email');
   }
}

function onSubmit() {

}

new WOW().init();
