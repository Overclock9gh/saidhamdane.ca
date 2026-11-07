/* saidhamdane.com — bascule de langue, mode sombre et apparition au défilement */

(function () {
  "use strict";

  /* ---------- Langue ---------- */

  var langButtons = document.querySelectorAll(".lang-btn");
  var nodes = document.querySelectorAll("[data-fr][data-en]");
  var each = function (list, fn) { Array.prototype.forEach.call(list, fn); };

  function applyLang(lang) {
    document.documentElement.lang = lang;

    each(nodes, function (el) {
      var value = el.getAttribute("data-" + lang);
      if (value === null) return;

      if (el.tagName === "TITLE") {
        document.title = value;
      } else if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.textContent = value;
      }
    });

    each(document.querySelectorAll("[data-href-fr][data-href-en]"), function (el) {
      el.setAttribute("href", el.getAttribute("data-href-" + lang));
    });

    each(langButtons, function (btn) {
      var on = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", String(on));
      btn.className = on ? "lang-btn is-active" : "lang-btn";
    });

    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  each(langButtons, function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var urlLang = window.location.search.match(/[?&]lang=(fr|en)/);
  var savedLang = null;
  try { savedLang = localStorage.getItem("lang"); } catch (e) {}
  var browserLang = (navigator.language || "fr").slice(0, 2).toLowerCase();

  applyLang(
    urlLang ? urlLang[1]
      : (savedLang === "fr" || savedLang === "en") ? savedLang
      : (browserLang === "en" ? "en" : "fr")
  );

  /* ---------- Mode sombre ---------- */

  var themeBtn = document.querySelector(".theme-btn");
  var themeIcon = themeBtn ? themeBtn.querySelector("i") : null;
  var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    var forced = document.documentElement.getAttribute("data-theme");
    if (forced) return forced;
    return systemDark && systemDark.matches ? "dark" : "light";
  }

  function paintThemeButton() {
    if (!themeBtn) return;
    var dark = currentTheme() === "dark";
    if (themeIcon) themeIcon.className = dark ? "fas fa-sun" : "fas fa-moon";
    themeBtn.setAttribute("aria-pressed", String(dark));
    themeBtn.setAttribute("aria-label", dark ? "Passer au mode clair" : "Passer au mode sombre");
    themeBtn.setAttribute("title", dark ? "Mode clair" : "Mode sombre");
  }

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("theme", theme); } catch (e) {}
    } else {
      document.documentElement.removeAttribute("data-theme");
      try { localStorage.removeItem("theme"); } catch (e) {}
    }
    paintThemeButton();
  }

  var savedTheme = null;
  try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
  applyTheme(savedTheme === "light" || savedTheme === "dark" ? savedTheme : null);

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  if (systemDark && systemDark.addEventListener) {
    systemDark.addEventListener("change", function () {
      if (!document.documentElement.getAttribute("data-theme")) paintThemeButton();
    });
  }

  /* ---------- Apparition au défilement ---------- */

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll("[data-reveal]");

  if (!reduced && "IntersectionObserver" in window) {
    each(targets, function (el) { el.classList.add("reveal"); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0.08 });

    each(targets, function (el) { observer.observe(el); });
  }

})();
