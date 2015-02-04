$(document).ready(function( ) {
  $('.hidden').hide();
  $('.draggable').draggable();
  $('#image-1-icon').click(function()
  {
    $('#image-1-icon').css("background-image", "url('image-1-icon-selected.png' )");  
  });
// open larger img divs when icon is double clicked
  $('#image-1-icon').dblclick(function(){
    $('#image-1').show(); 
  });
  $('#image-2-icon').dblclick(function(){
    $('#image-2').show(); 
  });

// hide larger img divs when they are clicked
  $('#image-1').click(function(){
    $('#image-1').hide(); 
  });
  $('#image-2').click(function(){
    $('#image-2').hide(); 
  });
  //$('#container').click(function () {
    //$('.hidden').hide();
  //});
});

