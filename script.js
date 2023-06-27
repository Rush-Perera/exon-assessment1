$(document).click(function (event) {
    var clickover = $(event.target);
    var navbar = $(".navbar-collapse");
    var isOpen = navbar.hasClass("in");
    if (isOpen && !clickover.hasClass("navbar-toggle")) {
      navbar.collapse("hide");
    }
  });