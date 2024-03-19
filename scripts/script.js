
var impost =(Math.random())*100







document.getElementById("amongus-image").addEventListener("click", function() {
  if (impost>95) {document.getElementById("amongus-image").style.display = "none";
    document.getElementById("crewin").style.display = "block";
    
  }
  else if (impost<=95) {document.getElementById("amongus-image").style.display = "none";
  document.getElementById("imp").style.display = "block";



  }

    
  })




 
document.getElementById("imp").addEventListener("click", function() {
  document.getElementById("amongus-image").style.display = "block";
  document.getElementById("imp").style.display = "none";

});