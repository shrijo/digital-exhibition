AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    var infoPanel = document.querySelector(".info-panel");
    var student = document.querySelector(".student");
    var projectTitle = document.querySelector(".project-title");

    this.el.addEventListener('mouseenter', function (evt) {
      infoPanel.classList.add("visible")
      projectTitle.innerHTML = this.el.dataset.projectTitle;
      student.innerHTML = this.el.dataset.student;
    });

    this.el.addEventListener('mouseleave', function (evt) {
      infoPanel.classList.remove("visible")
    });
  }
});
