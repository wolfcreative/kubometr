$(function() {
  var maxHeight = 0;
  $(".category h3").each(function () {
      var h_block = parseInt($(this).height());
      if(h_block > maxHeight) {
        maxHeight = h_block;
      };
  });
  $(".category h3").height(maxHeight);

  $(".product>.wrapper").each(function () {
    var heightBlock = $(this).height()
    $(this).css('height',heightBlock)
  });
});