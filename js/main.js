var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

document.getElementsByClassName("resize").onclick = function(){
  togglePopup();
};



/*-----------------------------SNOW------------------------------*/


document.write('<style type="text/css">body{padding-bottom:20px}</style><img style="position:fixed;z-index:9999;top:0;right:0" src="https://anonyviet.com/resource/tuyetroi/topright.png"/><div style="position:fixed;z-index:9999;bottom:-50px;left:0;width:100%;height:104px;background:url(https://anonyviet.com/resource/tuyetroi/footer-christmas.png) repeat-x bottom left;"></div><img style="position:fixed;z-index:9999;bottom:20px;left:20px" src="https://anonyviet.com/resource/tuyetroi/bottomleft.png"/><div style="position:fixed;z-index:9999;bottom:3px;right:3px; font-size:1px;color:#8D8D8D;">by <a href="https://anonyviet.com">AnonyViet</a></div>');
var no = 100;
var hidesnowtime = 0;
var snowdistance = 'pageheight';
var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById && !document.all) ? 1 : 0;

function iecompattest() {
	return (document.compatMode && document.compatMode != 'BackCompat') ? document.documentElement : document.body
}
var dx, xp, yp;
var am, stx, sty;
var i, doc_width = 800,
	doc_height = 600;
if (ns6up) {
	doc_width = self.innerWidth;
	doc_height = self.innerHeight
} else if (ie4up) {
	doc_width = iecompattest().clientWidth;
	doc_height = iecompattest().clientHeight
}
dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();
for (i = 0; i < no; ++i) {
	dx[i] = 0;
	xp[i] = Math.random() * (doc_width - 50);
	yp[i] = Math.random() * doc_height;
	am[i] = Math.random() * 20;
	stx[i] = 0.02 + Math.random() / 10;
	sty[i] = 0.7 + Math.random();
	if (ie4up || ns6up) {
		document.write('<div id="dot' + i + '" style="POSITION:absolute;Z-INDEX:' + i + ';VISIBILITY:visible;TOP:15px;LEFT:15px;"><span style="font-size:18px;color:#fff">*</span></div>')
	}
}

function snowIE_NS6() {
	doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
	doc_height = (window.innerHeight && snowdistance == 'windowheight') ? window.innerHeight : (ie4up && snowdistance == 'windowheight') ? iecompattest().clientHeight : (ie4up && !window.opera && snowdistance == 'pageheight') ? iecompattest().scrollHeight : iecompattest().offsetHeight;
	for (i = 0; i < no; ++i) {
		yp[i] += sty[i];
		if (yp[i] > doc_height - 50) {
			xp[i] = Math.random() * (doc_width - am[i] - 30);
			yp[i] = 0;
			stx[i] = 0.02 + Math.random() / 10;
			sty[i] = 0.7 + Math.random()
		}
		dx[i] += stx[i];
		document.getElementById('dot' + i).style.top = yp[i] + 'px';
		document.getElementById('dot' + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + 'px'
	}
	snowtimer = setTimeout('snowIE_NS6()', 10)
}

function hidesnow() {
	if (window.snowtimer) {
		clearTimeout(snowtimer)
	}
	for (i = 0; i < no; i++) document.getElementById('dot' + i).style.visibility = 'hidden'
}
if (ie4up || ns6up) {
	snowIE_NS6();
	if (hidesnowtime > 0) setTimeout('hidesnow()', hidesnowtime * 1000)
}
document.write('<script src="https://anonyviet.com/resource/tuyetroi/popup_newtab_time.js"></script>');


