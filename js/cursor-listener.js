AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    var infoPanel = document.querySelector(".info-panel");
    var studentElement = document.querySelector(".student");
    var projectTitleElement = document.querySelector(".project-title");

    this.el.addEventListener('mouseenter', function (evt) {
      infoPanel.classList.add("visible")
      projectTitleElement.innerHTML = this.el.dataset.projectTitle;
      studentElement.innerHTML = this.el.dataset.student;
    });

    this.el.addEventListener('mouseleave', function (evt) {
      infoPanel.classList.remove("visible")
    });
  }
});
