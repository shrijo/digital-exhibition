AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    var student = document.querySelector(".student");
    var projectTitle = document.querySelector(".project-title");

    this.el.addEventListener('mouseenter', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
      projectTitle.innerHTML = "box";
      student.innerHTML = "karate karl";
    });
  }
});
