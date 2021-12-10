

    function iconToggle(x) {
        x.classList.toggle("change");
      }
  
      
  
    $(document).ready(function() {
          $("#iconMenu").click(function(){
            $("#NavBar").fadeToggle();
      });
    });
   
  
  
      function moreInfo(num) {
          if (num == 1){
              var x = document.getElementById("myDIV1");
              if (x.style.display === "none") {
                  x.style.display = "block";
              } else {
                  x.style.display = "none";
              }
          }else if (num == 2){
              var y = document.getElementById("myDIV2");
              if (y.style.display === "none") {
                  y.style.display = "block";
              } else {
                  y.style.display = "none";
              }
          }else if (num == 3){
              var Z = document.getElementById("myDIV3");
              if (Z.style.display === "none") {
                  Z.style.display = "block";
              } else {
                  Z.style.display = "none";
              }
          }else if (num == 4){
              var J = document.getElementById("myDIV4");
              if (J.style.display === "none") {
                  J.style.display = "block";
              } else {
                  J.style.display = "none";
              }
          }else if (num == 5){
            var k = document.getElementById("myDIV5");
            if (k.style.display === "none") {
                k.style.display = "block";
            } else {
                k.style.display = "none";
            }
        }else{
            var h = document.getElementById("myDIV6");
            if (h.style.display === "none") {
                h.style.display = "block";
            } else {
                h.style.display = "none";
            }
        }
  }
  
      
  
  
  
      var i = 0;
      function move(service) {
          if (service == 1){
              if (i == 0) {
                  i = 1;
                  var elem = document.getElementById("myBar1");
                  var width = 10;
                  var id = setInterval(frame, 10);
                  function frame() {
                  if (width >= 100) {
                      clearInterval(id);
                      i = 0;
                  } else {
                      width++;
                      elem.style.width = width + "%";
                      elem.innerHTML = width  + "%";
                  }
                  }
              }
              }else if(service == 2){ 
                  if (i == 0) {
                  i = 1;
                  var elem = document.getElementById("myBar2");
                  var width = 10;
                  var id = setInterval(frame, 50);
                  function frame() {
                  if (width >= 100) {
                      clearInterval(id);
                      i = 0;
                  } else {
                      width++;
                      elem.style.width = width + "%";
                      elem.innerHTML = width  + "%";
                  }
                  }
              }
  
         }else if(service == 3){ 
                  if (i == 0) {
                  i = 1;
                  var elem = document.getElementById("myBar3");
                  var width = 10;
                  var id = setInterval(frame, 75);
                  function frame() {
                  if (width >= 100) {
                      clearInterval(id);
                      i = 0;
                  } else {
                      width++;
                      elem.style.width = width + "%";
                      elem.innerHTML = width  + "%";
                  }
                  }
              }
  
         }else if(service == 4){ 
                  if (i == 0) {
                  i = 1;
                  var elem = document.getElementById("myBar4");
                  var width = 10;
                  var id = setInterval(frame, 30);
                  function frame() {
                  if (width >= 100) {
                      clearInterval(id);
                      i = 0;
                  } else {
                      width++;
                      elem.style.width = width + "%";
                      elem.innerHTML = width  + "%";
                  }
                  }
              }
  
         }else if(service == 5){ 
                  if (i == 0) {
                  i = 1;
                  var elem = document.getElementById("myBar5");
                  var width = 10;
                  var id = setInterval(frame, 60);
                  function frame() {
                  if (width >= 100) {
                      clearInterval(id);
                      i = 0;
                  } else {
                      width++;
                      elem.style.width = width + "%";
                      elem.innerHTML = width  + "%";
                  }
                  }
              }
  
         }else {
          if (i == 0) {
                  i = 1;
                  var elem = document.getElementById("myBar6");
                  var width = 10;
                  var id = setInterval(frame, 75);
                  function frame() {
                  if (width >= 100) {
                      clearInterval(id);
                      i = 0;
                  } else {
                      width++;
                      elem.style.width = width + "%";
                      elem.innerHTML = width  + "%";
                  }
                  }
              }
  
         }
          } 
     
      
  
  
      function cartFunction(service) {
      if (service == 1){
          alert("Gigabit Internet added to Cart");
      } else if (service == 2){
          alert("500 Internet added to Cart");
      } else if (service == 3){
          alert("250 Internet added to Cart");
      } else if (service == 4){
          alert("Racer Mobile Internet added to Cart");
      } else if (service == 5){
          alert("Zommer Internet added to Cart");
      } else if (service == 6){
          alert("Surefer Mobile Internet added to Cart");
      }
  }
  