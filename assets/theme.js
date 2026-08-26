(function () {
  "use strict";

  /* ---- Theme toggle ------------------------------------------------ */

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function stored() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function systemDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function current() {
    return root.getAttribute("data-theme") || (systemDark() ? "dark" : "light");
  }

  function label() {
    if (!toggle) return;
    var next = current() === "dark" ? "light" : "dark";
    toggle.textContent = next === "dark" ? "Dark mode" : "Light mode";
    toggle.setAttribute("aria-label", "Switch to " + next + " mode");
  }

  if (toggle) {
    toggle.hidden = false;
    label();

    toggle.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      label();
    });
  }

  /* Follow the OS only while the visitor has made no explicit choice. */
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () {
      if (!stored()) label();
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ---- Email assembly ----------------------------------------------
     The address is split in the markup so scrapers reading the raw HTML
     don't get a usable string. With JS off, the fallback text stays put
     and is still readable by a human. */

  var slots = document.querySelectorAll("[data-email-user][data-email-domain]");
  Array.prototype.forEach.call(slots, function (el) {
    var address = el.getAttribute("data-email-user") + "@" + el.getAttribute("data-email-domain");
    var link = document.createElement("a");
    link.href = "mailto:" + address;
    link.textContent = address;
    el.parentNode.replaceChild(link, el);
  });
})();
