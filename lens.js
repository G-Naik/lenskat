var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;

var item = document.getElementsByClassName("slide");

var itemleft = item.length % itemDisplay;
var itemleft = item.length / itemDisplay;

let color = "black";

 
let width = 800;
var dots = document.querySelector(".dots").children;

var count = 0;
var dot = 0


function prev(){
  console.log(slider.style.left)
    if(slider.style.left == "-1600px")
    {
     console.log()
    }
    else{
      count = count - width;
      slider.style.left = count + "px"
      dot++;
      dots[dot].type = "disc";
    }
  
}
function next(){
  console.log(slider.style.left)
  if(slider.style.left == "0px")
    {
      
    }
    else{
      count = count + width;
      slider.style.left = count + "px"
      dot--;
      dots[dot].type = "disc";
    }
}