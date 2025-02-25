AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var infoPanel = document.querySelector(".info-panel");
    var studentElement = document.querySelector(".student");
    var projectTitleElement = document.querySelector(".project-title");
    var descriptionElement = document.querySelector(".description-text");
    var projectLinkElement = document.querySelector(".project-link");

    this.el.addEventListener('mouseenter', function (evt) {
      infoPanel.classList.add("visible")
      projectTitleElement.innerHTML = this.dataset.projectTitleString;
      studentElement.innerHTML = this.dataset.studentString;
      descriptionElement.innerHTML = this.dataset.descriptionString;
      projectLinkElement.setAttribute("href", this.dataset.linkString)

      if(this.classList.contains("video")) {
          alert("It's a video!");
      };

    });

    this.el.addEventListener('mouseleave', function (evt) {
      infoPanel.classList.remove("visible")
    });
  }
});
