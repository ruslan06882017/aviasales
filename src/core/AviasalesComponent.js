import { DomListener } from "./DomListener";

export class AviasalesComponent extends DomListener {
  constructor($root, options = {}){
    super($root, options.listeners)
  }

  // Возращает шаблон компонента
  toHTML() {
    return `<h1> Aviasales component </h1>`
  }

  init(){
    this.initDomListeners()
  }

  destrtoy(){
    this.removeDomListeners()
  }

}