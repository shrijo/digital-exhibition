document.addEventListener('fullscreenchange', exitVRMode, false);
document.addEventListener('mozfullscreenchange', exitVRMode, false);
document.addEventListener('MSFullscreenChange', exitVRMode, false);
document.addEventListener('webkitfullscreenchange', exitVRMode, false);

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

  var tagsToHide = document.getElementsByClassName("tag");

  console.log("enter")
  for(var i = 0; i < tagsToHide.length; i++){
      tagsToHide[i].setAttribute("visible",true);
  }
}

function exitVRMode(){
  var tagsToHide = document.getElementsByClassName("tag");

 if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
  {
    console.log("exit")
   for(var i = 0; i < tagsToHide.length; i++){
       tagsToHide[i].setAttribute("visible",false);
   }

 }
}
