import { AviasalesComponent } from "../../core/AviasalesComponent"

export default class MainSearch extends AviasalesComponent{
/*   constructor (selector, options){
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
 */
  static className = `main_search`
  
  toHTML(){
    return `<h1> Main search </h1>`
  }
}