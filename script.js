function getArea(){  
  var floorArea = document.getElementById("area").value;
   var floorNo = document.getElementById("floor").value;
   var tA = document.getElementById("totalarea").value = parseInt(floorArea)*parseInt(floorNo); 
  /*var totalArea = document.getElementById("res").innerHTML ="Customize your Budget" + " " + "(" +parseInt(floorArea)*parseInt(floorNo) + ")";*/
 }
 
 
 function total(){ 
   var tA =parseInt(document.getElementById("totalarea").value); 
   var steel = parseInt(document.getElementById("steel").value)*parseInt(tA);
   var cement =parseInt( document.getElementById("cement").value)*parseInt(tA);  
   var tiles = parseInt(document.getElementById("tiles").value)*parseInt(tA);
   var electrical = parseInt(document.getElementById("electric").value)*parseInt(tA); 
   var plumbing =parseInt(document.getElementById("plumbing").value)*parseInt(tA);  
   var interiorPaint = parseInt(document.getElementById("innerpaint").value)*parseInt(tA); 
   var exteriorPaint = parseInt(document.getElementById("exteriorpaint").value)*parseInt(tA);
   var door =parseInt(document.getElementById("door").value)*parseInt(tA);
   var window = parseInt(document.getElementById("window").value)*parseInt(tA);
   
   var total = parseInt(steel)+parseInt(cement)+parseInt(tiles)+parseInt(electrical)+parseInt(plumbing)+parseInt(interiorPaint)+parseInt(exteriorPaint)+parseInt(door)+parseInt(window);
   document.getElementById("totalcost").value = (total);
 }
 