$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable-text").click(function() {
    $("#hidden-text").slideToggle();
    $("#show-text").slideToggle();
  });
});
