let d = document;
    let $hamburger = d.querySelector('.hamburger');
    let $navItems = d.querySelector('.nav-items');

    $hamburger.addEventListener('click', function () {
      $hamburger.classList.toggle('is-active');
      $navItems.classList.toggle('is-open');
    });