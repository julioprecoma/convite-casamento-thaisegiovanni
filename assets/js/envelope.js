(function () {
  const openButton = document.getElementById('openInvitation');
  const menuScreen = document.getElementById('menuScreen');
  let opened = false;

  function openHome() {
    if (opened) return;
    opened = true;
    document.body.classList.add('opening');

    window.setTimeout(function () {
      document.body.classList.add('home-ready');
      menuScreen.setAttribute('aria-hidden', 'false');
    }, 1850);
  }

  openButton.addEventListener('click', openHome);
  openButton.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openHome();
    }
  });
})();
