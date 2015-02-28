$(function() {

  var model = {

    // inital cats 
    names: ['jimmy', 'alfonso', 'bart', 'cantrell', 'luis'],
    pics:  ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
    cats: [],
    currentCat: {},

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
      },

      render: function (){
        octopus.getCats().forEach(function (cat, ind, arr){
          var $item = $('<li>');
          $item.html(cat.name);
          $item.click(function(){
              view.catPane.render(cat);
              octopus.setCurrentCat(cat);
          });
          $('ul').append($item);
        });
      },
    },

    catPane: {
      init: function () {
        view.catPane.render(octopus.getDefaultCat());
        $('#cat-pic').click( function() {
          var cat = octopus.getCurrentCat();
          octopus.incrementCatClicks(cat);
          view.catPane.render(cat);
        });
      },
      render: function (cat) {
        octopus.clearArticle();
        $('#cat-name').html(cat.name);
        $('#cat-pic').css('background-image', 'url(images/'+cat.pic+')');
        $('#cat-clicks').html(cat.clicks);
      },
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
      var cat = model.cats[0];
      octopus.setCurrentCat(cat);
      return cat;
    },
    findCatByID: function (catID){
      var winner = $.grep(model.cats, function (cat){
        return cat.name === catID; 
      });
      return winner[0];
    },
    clearArticle: function () {
        $('#cat-name').html('');
        $('#cat-clicks').html('');
    },
    incrementCatClicks: function (cat) {
        cat.clicks += 1; 
    },
    setCurrentCat: function (cat) {
      model.currentCat = cat;
    },
    getCurrentCat: function (){
      return model.currentCat;
    },
  };
octopus.init();

});
