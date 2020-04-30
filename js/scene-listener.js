AFRAME.registerComponent('scene-listener',{
   init:function(){

     var tagsToHide = document.getElementsByClassName("tag")
     let  vrmode = false;

     this.el.sceneEl.addEventListener('enter-vr',function(){
           if(!vrmode){
             for(var i = 0; i < tagsToHide.length; i++){
                 tagsToHide[i].setAttribute("visible",true);
             }
             vrmode!=vrmode;
           }
      }
      this.el.sceneEl.addEventListener('exit-vr',function(){
           if(vrmode){
             for(var i = 0; i < tagsToHide.length; i++){
                 tagsToHide[i].setAttribute("visible",false);
             }
             vrmode!=vrmode;
           }
      }
  }
});
