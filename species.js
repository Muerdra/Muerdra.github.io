//
//Craig
//Opens the defaultOpen tab on pageload(Animal1)
//Used as reference: https://forums.asp.net/t/2113496.aspx?how+do+I+make+a+tab+to+open+by+default+on+clicking+the+div
window.onload = function () {
  startTab();
};

//Craig
function openAnimal(aniName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

//Craig
  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(aniName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
//added startTab function to defaultOpen
 function startTab() {
                document.getElementById("defaultOpen").click();

}
