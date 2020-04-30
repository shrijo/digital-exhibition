document.addEventListener('fullscreenchange', exitVRMode, false);
document.addEventListener('mozfullscreenchange', exitVRMode, false);
document.addEventListener('MSFullscreenChange', exitVRMode, false);
document.addEventListener('webkitfullscreenchange', exitVRMode, false);

var tagsToHide = document.getElementsByClassName("tag");

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

function exitVRMode()
{
  console.log("change")
 if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
 {
   for(var i = 0; i < tagsToHide.length; i++){
       tagsToHide[i].setAttribute("visible",false);
   }

 }
}
