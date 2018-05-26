window.onscroll = function onScroll(event) {
  let scrollPosition = 0;
  document.querySelectorAll('.main-content .section-content').forEach(function(element) {
    let windowHeight = document.documentElement.scrollTop;
    let sectionId = element.getAttribute('id');
    if (element.getBoundingClientRect().y <= 10 &&
      element.getBoundingClientRect().height + windowHeight >= windowHeight &&
      element.getBoundingClientRect().y * (-1) <= element.getBoundingClientRect().height - 10) {
      document.querySelector(`div.side-menu nav ul li a[href="#${sectionId}"]`).setAttribute('class', 'active');
    } else {
      document.querySelector(`div.side-menu nav ul li a[href="#${sectionId}"]`).setAttribute('class', 'deactivated');
    }
  });
}

function hideMenu() {
  let menuCheckbox = document.querySelector('.menu-mobile .menu-btn');
  menuCheckbox.click();
  console.log(menuCheckbox);
}
