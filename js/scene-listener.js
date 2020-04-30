AFRAME.registerComponent('scene-listener',{
   init:function(){

     var tagsToHide = document.getElementsByClassName("tag");

      this.el.sceneEl.addEventListener('exit-vr',function (evt) {
          log("yo");
             for(var i = 0; i < tagsToHide.length; i++){
                 tagsToHide[i].setAttribute("visible",false);
             }
      };
  }
});
