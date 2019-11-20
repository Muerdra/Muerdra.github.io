	function indexbutton() {
  			var x = document.createElement("IMG");
 			x.setAttribute("src", "Pictures/maptest.jpg");
  			x.setAttribute("width", "304");
  			x.setAttribute("height", "228");
  			x.setAttribute("alt", "	SHOW ME PIC");
  			document.body.appendChild(x);
		}

<button onclick="document.getElementById('wonderland').src='Pictures/land_of_wonder'">Explore</button>

<img id="wonderland" src="Pictures/land_of_wonder" style="width:500px">

<button onclick="document.getElementById('myImage').src='Pictures/land_of_wonder'">Contact</button>
