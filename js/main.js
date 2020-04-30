document.addEventListener('fullscreenchange', exitHandler, false);
document.addEventListener('mozfullscreenchange', exitHandler, false);
document.addEventListener('MSFullscreenChange', exitHandler, false);
document.addEventListener('webkitfullscreenchange', exitHandler, false);

var tagsToHide = document.getElementsByClassName("tag");

function exitHandler()
{
  console.log("change")
 if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
 {
  tagsToHide[i].setAttribute("visible",false);

 }
}

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

  for(var i = 0; i < tagsToHide.length; i++){
      tagsToHide[i].setAttribute("visible",true);
  }
}
