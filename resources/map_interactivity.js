//Javascript Document
var mapDetails = document.getElementById('map-details');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    mapDetails.innerHTML = content;
    mapDetails.style.opacity = "100%";
  }
  else {
    mapDetails.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
      mapDetails.style.top = (y + 20) + 'px';
      mapDetails.style.left = (x) + 'px';
};