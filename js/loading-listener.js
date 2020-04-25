AFRAME.registerComponent('loading-listener', {
  init: function () {
    var sceneEl = this.el;
    var loadingScreenNext = document.querySelector(".loading-screen-next");


    scenneEl.addEventListener('loaded', function (evt) {
      loadingScreenNext.classList.add("visible")
    });
  }
});
