
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}



  function iconToggle(x) {
    x.classList.toggle("change");
  }

  

$(document).ready(function() {
      $("#iconMenu").click(function(){
        $("#NavBar").fadeToggle();
  });
});
 
