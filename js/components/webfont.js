// Google Web Font

if (window.location.hostname != "localhost") {
  WebFontConfig = {
    google: { families: [ 'Rubik:400,300,500,700,900,400italic:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
}

