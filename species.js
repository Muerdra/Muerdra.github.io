//Opens the defaultOpen tab on pageload
//https://forums.asp.net/t/2113496.aspx?how+do+I+make+a+tab+to+open+by+default+on+clicking+the+div
window.onload = function () {
  startTab();
};

function openCity(cityName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
//added startTab function to defaultOpen
 function startTab() {
                document.getElementById("defaultOpen").click();

}

//TESTING
function indexbutton2() {
  			var x = document.createElement("IMG");
 			  x.setAttribute("src", "Pictures/maptest.jpg");
  			x.setAttribute("width", "304");
  			x.setAttribute("height", "228");
  			x.setAttribute("alt", "	SHOW ME PIC");
  			document.body.appendChild(x);
		}
