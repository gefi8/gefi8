window.onscroll = function onScroll(event) {
  let scrollPosition = 0;
  document.querySelectorAll('.main-content .section-content').forEach(function(element) {
    let windowHeight = document.documentElement.scrollTop;
    let sectionId = element.getAttribute('id');
    if (element.getBoundingClientRect().y <= 10 &&
      element.getBoundingClientRect().height + windowHeight >= windowHeight &&
      element.getBoundingClientRect().y * (-1) <= element.getBoundingClientRect().height - 10) {
      document.querySelector(`nav ul li a[href="#${sectionId}"]`).setAttribute('class', 'active');
    } else {
      document.querySelector(`nav ul li a[href="#${sectionId}"]`).setAttribute('class', 'deactivated');
    }
  });
}
