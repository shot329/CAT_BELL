$(function() {

  // スクロール時のヘッダー
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass('header-bgc');
    } else {
      $('.header').removeClass('header-bgc');
    }
  });

  // ホバー時のボタン
  $('.more-btn').hover(
    function() {
      $(this).addClass('change-fv-btn');
    },
    function() {
      $(this).removeClass('change-fv-btn');
    }
  );
  $('.section-btn').hover(
    function() {
      $(this).addClass('change-btn');
    },
    function() {
      $(this).removeClass('change-btn');
    }
  );

  // map
  $(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
  });

});