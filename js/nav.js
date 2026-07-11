/* Mobile navigation toggle.
   The button is only rendered (via CSS) when `html.js` is set, so without JS
   the links stay visible and the site remains navigable. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  // Must match the CSS breakpoint: above this the links are laid out normally
  // and the button is hidden.
  var wide = window.matchMedia('(min-width: 768px)');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // A chosen link (or the CTA) means the visitor is done with the menu. Same-page
  // anchors don't reload, so the panel would otherwise stay open over the target.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // Rotating to a wide viewport shows the full nav again; drop the open state so
  // the button isn't left reading expanded when it's no longer on screen.
  wide.addEventListener('change', function (event) {
    if (event.matches) setOpen(false);
  });
})();
