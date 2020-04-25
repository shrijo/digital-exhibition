AFRAME.registerComponent('loading-listener', {
  init: function () {
    var sceneEl = this.el;
    var loadingScreenNext = document.querySelector(".loading-screen-next");

    alert("hello1");

    scenneEl.addEventListener('loaded', function (evt) {
      alert("hello");
      //loadingScreenNext.classList.add("visible")
    });
  }
});
