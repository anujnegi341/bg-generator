var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];

function changecolor() {
  body.style.background = "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";

  
}

color1.addEventListener("input", changecolor);
color2.addEventListener("input", changecolor);
