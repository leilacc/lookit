$('#dummy').ready(function() {
  if ($(window).width() > 1366) {
    $('#headerwrap').css('background',
      'url(../img/shutterstock1920.jpg) no-repeat center top');
  } else {
    $('#headerwrap').css('background',
      'url(../img/shutterstock1366.jpg) no-repeat center top');
  }
  $('#headerwrap').css('background-size', 'cover');
});
