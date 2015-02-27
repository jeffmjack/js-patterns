/*
// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background="white";
*/

var names = ['jimmy', 'alfonso', 'bart', 'cantrell', 'luis'];
var pics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var cats = [];

$(document).ready(function () {
// loop over the names in our array
  names.forEach(function (item, index, array) {
    //fill out the cats array
    var cat = {
      name: item,
      pic:  pics[index],
      clicks: 0
    };
    cats.push(cat);
});

  cats.forEach(function (cat, index, array) {
    // build the li in the aside

    var $li = $("<li>");

    $li.html(cat.name);
    $li.name = cat.name;
    $('aside ul').append($li);

    // make clicking a <li> show the article with the li's name in the main
    $li.click(function(){ 
      var articleSelector = "article[name=" + $li.name +"]";
      $('article').hide();
      $(articleSelector).show();
      });
  });  

  cats.forEach(function (cat, index, array) {
    var myArticle = articleMaker(cat); 
    nameSectionMaker(cat, myArticle);
    picSectionMaker(cat, myArticle);
    clicksSectionMaker(cat, myArticle);

    // hide the cat's profile
 });

    // make clicking on the picSection increment cat.clicks
    $('.picClass').click(function () {
      var $myArticle = $(this).closest('article');
      var name = $myArticle.attr('name');
      $.grep(cats, function (e) {
        if (e.name == name) {
          e.clicks = e.clicks + 1;
          $myArticle.find('.clicksClass').remove();
          clicksSectionMaker(e, $myArticle);
        }
      });
    });

      //build the article in the main 
    function articleMaker(cat) {
      var $article = $("<article>");
      $article.attr('name', cat.name); 
      $('body').append($article);
      $article.hide();
      return $article;
    }

      // build the cat's name section
    function nameSectionMaker (cat, $article) {
      var $nameSection = $('<section>');
      $nameSection.addClass = 'nameClass';
      $nameSection.html(cat.name);
      $article.append($nameSection);
    }

      // build the cat's pic section
    function picSectionMaker (cat, $article) {
      var $picSection = $('<section>');
      $picSection.addClass('picClass');
      $picSection.css('background-image', 'url('+cat.pic+')');
      $article.append($picSection);
    }

      // build the cat's Clicks section
    function clicksSectionMaker (cat, $article) {
      var $clicksSection = $('<section>');
      $clicksSection.addClass('clicksClass');
      $clicksSection.html('total clicks: ' + cat.clicks);
      $article.append($clicksSection);
    }

});
