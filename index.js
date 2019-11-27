	function indexbutton() {
  			var x = document.createElement("IMG");
 			x.setAttribute("src", "Pictures/maptest.jpg");
  			x.setAttribute("width", "304");
  			x.setAttribute("height", "228");
  			x.setAttribute("alt", "	SHOW ME PIC");
  			document.body.appendChild(x);
		}



function myFunction()
{
    if( document.getElementById("image1").src == "Pictures/Sharkorse.png" ){
        document.getElementById("image2").src = "Pictures/foxnail.jfi";
    }
    elseif( document.getElementById("image2").src == "Pictures/foxnail.jfi" ){
        document.getElementById("image3").src = "Pictures/Elifly.jfif";
    }
    else{
        document.getElementById("image1").src = "Pictures/Sharkorse.png";
    }

}


// This is an experiment for slide show //

// Source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow //

  

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



