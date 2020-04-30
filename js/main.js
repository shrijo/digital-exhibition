function showDescription() {
  document.querySelector(".description").classList.toggle("descriptionVisible");
  document.querySelector(".barvertical").classList.toggle("rot45");
}

function hideLoadingScreen(){
  document.querySelector(".loading-screen").style.display = "none";
}

function showMenu() {
  document.querySelector(".menu").classList.toggle("menu-visible");
}

function enterVRMode(){
  document.querySelector("a-scene").enterVR();
  var tagsToHide = document.getElementsByClassName("tag")
  for(var i = 0; i < tagsToHide.length; i++){
      tagsToHide[i].setAttribute("visible",true);
  }
}
