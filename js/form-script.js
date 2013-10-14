var check_pwd_match = function () {
  var pwds_match = ($('#secret1').val() === $('#secret2').val()) && $('#secret1').val().length > 0;
  if (pwds_match) {
    $('#submit').removeAttr("disabled");
    $('#submit').html('Send!');
  } else {
    $('#submit').attr("disabled", true);
    if ($('#secret2').val().length > 0) {
      $('#submit').html("Secrets don't match");
    }
  }
};

$(document).ready(function() {
  check_pwd_match();
  $("#secret1,#secret2").keyup(function() {
    check_pwd_match();
  });
});