
    function iconToggle(x) {
      x.classList.toggle("change");
    }



  $(document).ready(function() {
        $("#iconMenu").click(function(){
          $("#NavBar").fadeToggle();
    });
  });

    function openTab(tabName) {
      var i, x;
      x = document.getElementsByClassName("containerTab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        window.scrollTo(0,document.body.scrollHeight);
      }
      document.getElementById(tabName).style.display = "block";
    }

    $(document).ready(function() {
      $('.zoom').magnify();
    });

