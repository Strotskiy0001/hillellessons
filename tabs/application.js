class Tab {
  #titles = [];
  #bodys = [];
  #activeIndex = 0;
  static CLASSES = {
    active: "title-active",
    title_cont: "title-container",
    show: "show",
    title: "title",
    body: "body",
  };
  constructor(el) {
    this.init(el);
  }

  init(el) {
    this.setElement(el);
    this.initialClassSet(el);
    el.children[0].addEventListener("click", this.onTabSwitch);
  }

  setElement(el) {
    this.#titles = [...el.children[0].children];
    this.#bodys = [...el.children[1].children];
  }
  initialClassSet(el) {
    console.log(this.#titles);
    this.setActiveClasses(this.#titles, Tab.CLASSES.active, Tab.CLASSES.title);
    this.setActiveClasses(this.#bodys, Tab.CLASSES.show, Tab.CLASSES.body);
    el.children[0].classList.add(Tab.CLASSES.title_cont);
  }

  onTabSwitch = (e) => {
    console.log(e.target);
    this.#activeIndex = this.#titles.indexOf(e.target);
    this.renderElements();
  };

  renderElements() {
    this.itElement(this.#titles, Tab.CLASSES.active);
    this.itElement(this.#bodys, Tab.CLASSES.show);
  }

  setActiveClasses(elements, activeClass, commonClass) {
    elements.forEach((e, i) => {
      e.classList.add(commonClass);
      if (i === this.#activeIndex) {
        e.classList.add(activeClass);
      }
    });
  }

  itElement(elements, elClass) {
    elements.forEach((e, i) => {
      if (i === this.#activeIndex) {
        e.classList.add(elClass);
      } else {
        e.classList.remove(elClass);
      }
    });
  }
}
