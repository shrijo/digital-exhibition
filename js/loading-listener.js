AFRAME.registerComponent('loading-listener', {
  init: function () {
    var loadingScreenNext = document.querySelector(".loading-screen-next");

    this.el.addEventListener('loaded', function (evt) {
      loadingScreenNext.classList.add("scene-is-loaded")
    });
  }
});
