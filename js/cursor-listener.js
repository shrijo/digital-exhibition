AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    var infoWrapper = document.querySelector(".info-wrapper");
    var studentElement = document.querySelector(".student");
    var projectTitleElement = document.querySelector(".project-title");
    var descriptionElement = document.querySelector(".description");

    this.el.addEventListener('mouseenter', function (evt) {
      infoWrapper.classList.add("visible")
      projectTitleElement.innerHTML = this.dataset.projectTitleString;
      studentElement.innerHTML = this.dataset.studentString;
      descriptionElement.innerHTML = this.dataset.descriptionString;
    });

    this.el.addEventListener('mouseleave', function (evt) {
      infoWrapper.classList.remove("visible")
    });
  }
});
