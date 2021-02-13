import { form } from "../utils";

export class Sidebar {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }

  render() {
    this.el.insertAdjacentHTML("afterbegin", this.template);
    this.el.addEventListener("submit", this.default);
  }

  default(event) {
    event.preventDefault();
    event.target.reset();
  }

  get template() {
    return [form("TEXT"), form("title")].join("");
  }
}
