function sceneLoaded () {
  document.querySelector(".loading-screen-next").classList.add("scene-has-loaded");
}


function showDescription() {
  document.querySelector(".description").classList.toggle("descriptionVisible");
  document.querySelector(".barvertical").classList.toggle("rot45");
}

function hideLoadingScreen(){
  document.querySelector(".loading-screen").style.display = "none";
}
