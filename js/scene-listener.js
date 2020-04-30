AFRAME.registerComponent('scene-listener',{
   init:function(){

     var tagsToHide = document.getElementsByClassName("tag");

      this.el.addEventListener('exit-vr',function (evt) {
          alert("yo");
             for(var i = 0; i < tagsToHide.length; i++){
                 tagsToHide[i].setAttribute("visible",false);
             }
      };
  }
});
