window.addEventListener('load', hola(), false);
var hola = function(){
  var elemento = <video autoplay loop muted playsinline src="video/video_banner.webm"></video>;
  document.header.appendChild(elemento);
}
