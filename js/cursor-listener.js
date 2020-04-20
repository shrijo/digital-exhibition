AFRAME.registerComponent('cursor-listener', {
  schema: {student: 'karate karl'};
  init: function () {
    var lastIndex = -1;
    var
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});
