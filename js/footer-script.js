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

  // ns-hugo:/home/runner/work/edTech-hugo/edTech-hugo/themes/aittr-wix/assets/js/modules/reasons.js
  var reasons = document.querySelectorAll(".start-now__item");
  var selctorsBlock = document.querySelector(".start-now__selectors");
  var btnsTemplate = document.querySelector("#r-selector");
  var startNo = 0;
  reasons.forEach((r, i) => {
    const btnClone = btnsTemplate.content.cloneNode(true);
    const btn = btnClone.querySelector("button");
    btn.dataset.reasonNo = i;
    if (r.classList.contains("start-now__item--active")) {
      btn.classList.add("start-now__selector--active");
      startNo = i;
    }
    selctorsBlock.appendChild(btnClone);
  });
  var selectors2 = document.querySelectorAll(".start-now__selector");
  var setActive = (activeNo) => {
    for (let i = 0; i < reasons.length; i += 1) {
      reasons[i].className = "";
      reasons[i].className = activeNo === i ? "start-now__item start-now__item--active" : "start-now__item";
      selectors2[i].className = "";
      selectors2[i].className = activeNo === i ? "start-now__selector start-now__selector--active" : "start-now__selector";
    }
  };
  var reasonsRotator = (startFrom) => {
    let activeNo = startFrom;
    const chooseItem = () => {
      activeNo = activeNo + 1 < reasons.length ? activeNo + 1 : 0;
      setActive(activeNo);
    };
    return window.setInterval(chooseItem, 8e3);
  };
  var rot = reasonsRotator(startNo);
  selctorsBlock.addEventListener("click", (event) => {
    const newStartNo = +event.target.dataset.reasonNo;
    setActive(newStartNo);
    clearInterval(rot);
    rot = reasonsRotator(newStartNo);
    event.stopPropagation();
    event.preventDefault();
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
