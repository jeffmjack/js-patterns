$(document).ready(function( ) {
  var cat1 = "Jimmy";
  var cat2 = "Alfonso";
  var cat1number = 0;
  var cat2number = 0;

  $('#cat1-name').html(cat1);
  $('#cat2-name').html(cat2);

  $('#cat1-pic').click(function() {
    cat1number++;
    $('#cat1-clicks').html(cat1number);
    });

  $('#cat2-pic').click(function() {
    cat2number++;
    $('#cat2-clicks').html(cat2number);
    });
});
