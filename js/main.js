document.addEventListener('fullscreenchange', exitVRMode);
document.addEventListener('mozfullscreenchange', exitVRMode);
document.addEventListener('MSFullscreenChange', exitVRMode);
document.addEventListener('webkitfullscreenchange', exitVRMode);

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
 else{
   for(var i = 0; i < tagsToHide.length; i++){
     console.log("enter")

       tagsToHide[i].setAttribute("visible",true);
   }
 }
}
