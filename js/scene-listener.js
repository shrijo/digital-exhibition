AFRAME.registerComponent('scene-listener', {
  init: function () {
    var loadingScreenNext = document.querySelector(".loading-screen-next");
    var tagsToHide = document.getElementsByClassName("tag");

    this.el.addEventListener('loaded', function (evt) {
      loadingScreenNext.classList.add("scene-is-loaded")
    });

    this.el.addEventListener('enter-vr', function (evt) {
      for(var i = 0; i < tagsToHide.length; i++){
        tagsToHide[i].setAttribute("visible",true);
      };
      console.log("enter");
    });

    this.el.addEventListener('exit-vr', function (evt) {
      for(var i = 0; i < tagsToHide.length; i++){
        tagsToHide[i].setAttribute("visible",false);
      };
      console.log("exit");
    });
  }
});
