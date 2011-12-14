// scale plugin
// - scales element to 100% height or 100% width of container depending on which will result in full coverage
// - set explicit height/width attributes on images to be scaled
// - To avoid flickers, set initial css display:none on image elements that will call this metho

(function($){

  $.fn.scaleFg = function(){

    var
      that = this;

    this.each(function(){
      var 
        $bg = $(this).parent().find('.bg:eq(0)'),
        bgDims = {
          h: $bg.attr('height'),
          w: $bg.attr('width')
        };

      console.log(bgDims);
    

    })
  }
}(jQuery));
