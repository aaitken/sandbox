// scale plugin
// - scales element to 100% height or 100% width of container depending on which will result in full coverage
// - set explicit height/width attributes on images to be scaled
// - To avoid flickers, set initial css display:none on image elements that will call this metho

(function($){

  var
    $win = $(window),
    winRatio = function(){
      return $win.width()/$win.height();
    },
    imgRatio;

  $.fn.scaleBg = function(){

    var
      scale,  
      that = this;

    //On first time through (domready) set the imgRatio, which won't change
    //After we have the ratio, need get rid of hard dimensions so css can take over
    if(this.attr('width')){
      imgRatio =  this.attr('width')/this.attr('height'); 
      this
        .removeAttr('height')
        .removeAttr('width');
    }
    
    //Pick up the window ratio and compare it to our image's
    //set image to 100% width or height depending on which will provide full coverage of container
    scale = function(){
      imgRatio > winRatio() ? that.css('height','110%') : that.css('width','110%');
    }
    
    $win.resize(function(){
      that.css({width: '', height: ''});
      scale();
    });

    scale();
    return this.show();
  }
}(jQuery));
