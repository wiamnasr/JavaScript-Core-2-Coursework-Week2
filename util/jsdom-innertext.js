function patchJsdomInnerText() {
  // do this so students can use element.innerText which jsdom does not implement
  if (!global.window.HTMLElement.prototype.hasOwnProperty("innerText")) {
    Object.defineProperty(global.window.HTMLElement.prototype, "innerText", {
      get() {
        return this.textContent;
      },
      set(value) {
        this.textContent = value;
        if (this.tagName.toLowerCase() === "option") {
          this.value = value;
        }
      },
    });
  }
}

module.exports = patchJsdomInnerText;
