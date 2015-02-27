$(function() {

  var model = {

    // inital cats 
    names: ['jimmy', 'alfonso', 'bart', 'cantrell', 'luis'],
    pics:  ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
    cats: [],

    init: function (names) {
        model.names.forEach(function (item, index, array) {
          var cat = {
            name: item,
            pic:  model.pics[index],
            clicks: 0
          };
          model.cats.push(cat);
        });
    },
  };

  var view = {
    init: function (){
      view.list.init();
      view.catPane.init();
    },
    list: {
      init: function  (){
        view.list.render();
        $('li').click(function (e){
          var catID = $(this).attr('id');
          var clickedCat = octopus.findCatByID(catID);
          view.catPane.render(clickedCat);
        });
      },

      render: function (){
        var htmlStr = '';
        octopus.getCats().forEach(function (e, ind, arr){
          htmlStr = '<li id=\'' +
            e.name +
            '\'>' +
            e.name +
            '</li>';
          $('ul').append(htmlStr);
      });
    },

    },
    catPane: {
      init: function () {
        view.catPane.render(octopus.getDefaultCat());

      },
      render: function (cat) {
        var myBlock = '';
        myBlock += '<p> This is ' +
          cat.name +
          '!! ' +
          '<div class=\'picClass\' id= \'' +
          cat.name +
          '\'> </div>' + 
          'total clicks: ' +
          cat.clicks +
          '</p>';
        $('article').html('');
        $('article').append(myBlock);
        $('.picClass').css('background-image', 'url(images/'+cat.pic+')');
        $('.picClass').click(function () {
          var catID= $(this).attr('id');
          var cat = octopus.findCatByID(catID);
          cat.clicks += 1;
          view.catPane.render(cat);
        });


      }
    },
  };

  var octopus = {
    init: function() {
      model.init();
      view.init();
    },
    getCats: function () {
      return model.cats;
    },
    getDefaultCat: function () {
      return model.cats[0];
    },
    findCatByID: function (catID){
      var winner = $.grep(model.cats, function (cat){
        return cat.name === catID; 
      });
      return winner[0];
    },
  };
octopus.init();

});
