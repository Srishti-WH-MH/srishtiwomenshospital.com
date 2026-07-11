/* Booking form → WhatsApp.
   There is no backend: the form composes a message and hands it to WhatsApp,
   where the visitor sends it themselves. Nothing leaves the page otherwise. */
(function () {
  'use strict';

  var WHATSAPP = '919642110707';

  var form = document.getElementById('book');
  if (!form) return;

  function value(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = value('book-name');
    var phone = value('book-phone');

    // Name and phone are what make the request actionable; without them the
    // hospital has nothing to call back on.
    if (!name || !phone) {
      form.reportValidity();
      return;
    }

    var lines = [
      'Appointment request — Srishti',
      'Name: ' + name,
      'Phone: ' + phone,
      'Reason: ' + (value('book-reason') || '—')
    ];

    var note = value('book-note');
    if (note) lines.push('Note: ' + note);

    window.open(
      'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n')),
      '_blank',
      'noopener'
    );
  });
})();
