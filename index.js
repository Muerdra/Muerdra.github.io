	function indexbutton() {
  			var x = document.createElement("IMG");
 			x.setAttribute("src", "Pictures/maptest.jpg");
  			x.setAttribute("width", "304");
  			x.setAttribute("height", "228");
  			x.setAttribute("alt", "	SHOW ME PIC");
  			document.body.appendChild(x);
		}

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});


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

