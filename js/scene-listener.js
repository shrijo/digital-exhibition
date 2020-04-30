AFRAME.registerComponent('scene-listener',{
   init:function(){

     var tagsToHide = document.getElementsByClassName("tag")

     this.el.sceneEl.addEventListener('enter-vr',function(){
           if(!vrmode){
             for(var i = 0; i < tagsToHide.length; i++){
                 tagsToHide[i].setAttribute("visible",true);
             }
           }
      }
      this.el.sceneEl.addEventListener('exit-vr',function(){
           if(vrmode){
             for(var i = 0; i < tagsToHide.length; i++){
                 tagsToHide[i].setAttribute("visible",false);
             }
           }
      }
  }
});
