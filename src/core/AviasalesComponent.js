import { DomListener } from "./DomListener";

export class AviasalesComponent extends DomListener {
  // Возращает шаблон компонента
  toHTML() {
    return `<h1> Aviasales component </h1>`
  }
}