AFRAME.registerComponent('cursor-listener-video', {
  init: function () {
    var infoPanel = document.querySelector(".info-panel");
    var studentElement = document.querySelector(".student");
    var projectTitleElement = document.querySelector(".project-title");
    var descriptionElement = document.querySelector(".description");

    this.el.addEventListener('mouseenter', function (evt) {
      infoPanel.classList.add("visible")
      projectTitleElement.innerHTML = this.dataset.projectTitleString;
      studentElement.innerHTML = this.dataset.studentString;
      descriptionElement.innerHTML = this.dataset.descriptionString;

      this.play();
    });

    this.el.addEventListener('mouseleave', function (evt) {
      infoPanel.classList.remove("visible");
      this.pause();
    });
  }
});
