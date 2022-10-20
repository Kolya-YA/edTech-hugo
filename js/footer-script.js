(() => {
  // ns-hugo:/home/runner/work/edTech-hugo/edTech-hugo/themes/aittr-wix/assets/js/modules/top-menu.js
  var navToggler = document.querySelectorAll(".header__nav-toggler");
  var headerNav = document.querySelector(".header__nav");
  navToggler.forEach((tgl) => tgl.addEventListener("click", () => {
    if (document.body.style.position === "fixed") {
      document.body.style.position = null;
      document.body.style.top = null;
    } else {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.left = "0px";
      document.body.style.right = "0px";
    }
    headerNav.classList.toggle("header__nav--open");
  }));

  // ns-hugo:/home/runner/work/edTech-hugo/edTech-hugo/themes/aittr-wix/assets/js/modules/moto-rotator.js
  var listRotator = (list) => {
    const motoItems = list.children;
    let curItem = 0;
    const chooseItem = () => {
      curItem = curItem + 1 < motoItems.length ? curItem + 1 : 0;
      for (let i = 0; i < motoItems.length; i += 1) {
        motoItems[i].style.display = curItem === i ? "list-item" : "none";
      }
    };
    window.setInterval(chooseItem, 6e3);
  };
  var topAnnounces = document.querySelector(".announce__list");
  listRotator(topAnnounces);

  // ns-hugo:/home/runner/work/edTech-hugo/edTech-hugo/themes/aittr-wix/assets/js/modules/modules-selector.js
  var selectors = document.querySelectorAll(".modules__selector-item");
  var modules = document.querySelectorAll(".modules__item");
  var moduleSwitcher = (moduleID) => {
    selectors.forEach((sel) => {
      if (sel.dataset.moduleId === moduleID) {
        sel.classList.add("modules__selector-item--active");
      } else {
        sel.classList.remove("modules__selector-item--active");
      }
    });
    modules.forEach((mod) => {
      if (mod.dataset.moduleId === moduleID) {
        mod.classList.add("modules__item--active");
      } else {
        mod.classList.remove("modules__item--active");
      }
    });
  };
  selectors.forEach((s) => {
    s.addEventListener("click", (e) => {
      moduleSwitcher(e.target.dataset.moduleId);
    });
  });

  // ns-hugo:/home/runner/work/edTech-hugo/edTech-hugo/themes/aittr-wix/assets/js/modules/separator.js
  var separators = document.querySelectorAll(".separator");
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("separator--visible");
      } else {
        entry.target.classList.remove("separator--visible");
      }
    });
  });
  separators.forEach((s) => {
    s.classList.remove("separator--visible");
    observer.observe(s);
  });
})();
