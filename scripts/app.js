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
      model.currentCat = model.cats[0]; 
    },
  };

  var view = {
    init: function (){
      view.list.init();
      view.catPane.init();
      view.adminPane.init();
    },
    reRender: function() {
      view.list.render();
      view.catPane.render();
      view.adminPane.render();
    },
    list: {
      init: function  (){
        view.list.render();
      },

      render: function (){
        octopus.clearList();
        octopus.getCats().forEach(function (cat, ind, arr){
          var $item = $('<li>');
          $item.html(cat.name);
          $item.click(function(){
              octopus.setCurrentCat(cat);
              view.reRender();
          });
          $('ul').append($item);
        });
      },
    },

    catPane: {
      init: function () {
        view.catPane.render(octopus.getCurrentCat());
        $('#cat-pic').click( function() {
          var cat = octopus.getCurrentCat();
          octopus.incrementCatClicks(cat);
          view.catPane.render(cat);
        });
      },
      render: function (cat) {
        if (! cat) {var cat = octopus.getCurrentCat();}
        octopus.clearArticle();
        $('#cat-name').html(cat.name);
        $('#cat-pic').css('background-image', 'url(images/'+cat.pic+')');
        $('#cat-clicks').html(cat.clicks);
      },
    },
    adminPane: {
      init: function () {
        $('#edit-panel').hide();
        $('#admin-button').click(function () {
          $('#edit-panel').show();
          view.adminPane.render();
        });

        $('form').submit(function() {
          var $inputs = $('form :input');
          var values = {};
          $inputs.each(function () {
              values[this.name]= $(this).val();
          });
          octopus.saveData(values);
          $('#edit-panel').hide();

          view.reRender();
          return false;
        });
        view.adminPane.render(octopus.getCurrentCat());
      },
      render: function (cat) {
        if (! cat) {var cat = octopus.getCurrentCat();}
        $('input[name=\'name\'').val(cat.name);
        $('input[name=\'pic\'').val(cat.pic);
        $('input[name=\'clicks\'').val(cat.clicks);
      },
    }
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
    clearList: function () {
        $('ul').html('');
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
    saveData: function (obj) {
      var cat = this.getCurrentCat();
      cat.name = obj.name;
      cat.pic = obj.pic;
      cat.clicks=  +obj.clicks;
    },

  };
octopus.init();

});
