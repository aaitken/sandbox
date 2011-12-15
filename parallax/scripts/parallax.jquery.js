(function($){
  
  // Original script by Steve Fenton
  // http://www.stevefenton.co.uk/Content/Jquery-Background-Parallax/
  // base Version: 3.0.3
  // Forked by: Alex Aitken

  $.fn.bgParallax = function(settings){
  
    var 
      config = {
        speed: 0.5, //how fast are we p'llaxin'
        $scrollEl: $(window) //element whose scroll kicks off the parallax shift
      },
      doParallax, //image position reset function
      initialCssPosition = this.css('background-position').match(/\d+/g), //assuming a percent here
      initialY,
      parent, //container a/g which bg is sized
      $scrollEl, //local cache var
      speed, //local cache var
      $that = this;
    
    if (settings) {
      $.extend(config, settings);
    }

    //cache the assignments to avoid repeated lookups
    parent = config.parent;
    $scrollEl = config.$scrollEl;
    speed = config.speed; 
    initialY = initialCssPosition[1];

    
    doParallax = function(){
      
      // Calculate the movement based on scroll and 'speed', round to 2dp
      var
        arg0 = arguments[0],
        y = initialY - (speed*arg0.scrollTop()); 

        //y =  (initialOffset-(speed*arg0.scrollTop()));

      // Scroll the background
      arguments[1].css({
        'background-position': initialCssPosition[0]+'px '+y+'px'
      });
    };
    
    //window resize logic
    // (function(){
      // var to;
      // $(window).resize(function(){
        // clearTimeout(to);
        // to = setTimeout(function(){
          // window.location.reload(false);
        // },500);
      // });
    // }());
    
    return this.each(function(){

      // Make sure we are dealing with a float
      speed = parseFloat(speed);
      
      //bind doParallax to scroll of $scrollEl
      $scrollEl.scroll(function(e){ doParallax($scrollEl, $that) });
    });
  };
}(jQuery));
