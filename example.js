
var names = ['jimmy', 'alfonso', 'bart', 'cantrell', 'luis'];

$(document).ready(function () {
  for (var i = 0; i < names.length; i++) {
    var cat = {'id': i, 'name': names[i]};

    var $li = $("<li>");

  $li.html(cat.name) 
  $('ul').append($li);

}

}
