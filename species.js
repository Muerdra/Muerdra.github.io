/*/Craig
//Opens the tab defaultOpen tab on pageload(Animal1)
//Used as reference/template: https://forums.asp.net/t/2113496.aspx?how+do+I+make+a+tab+to+open+by+default+on+clicking+the+div */
window.onload = function () {
  startTab();
}
/*Whatever is named defaultOpen on tab will open when the user goes to a page with tabs
*/
 function startTab() {
                document.getElementById("defaultOpen").click();
}

/*Used as Template https://www.w3schools.com/howto/howto_js_tab_header.asp-->
//Tab section Craig Harding */
function openAnimal(aniName, elmnt, color) {
  /* Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  /* Remove the background color of all tablinks/buttons so no overlap when clicking between tabs*/
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  /* Shows the wanted tab content on click*/
  document.getElementById(aniName).style.display = "block";

  /* Add the specific color to the button used to open the tab content*/
  elmnt.style.backgroundColor = color;
}



