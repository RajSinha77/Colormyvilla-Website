 ;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() { 
    var ovrl = id("page-ajax-loader"),
        prog = id("sk-rotating-plane"),
        // stat = id("progstat_loader"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      // prog.style.width = perc;
      // stat.innerHTML = perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      // ovrl.style.opacity = 0;
      setTimeout(function(){ 
        $('#page-ajax-loader').fadeOut('800', function(){});
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());