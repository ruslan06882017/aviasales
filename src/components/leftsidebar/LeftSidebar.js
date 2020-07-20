import { AviasalesComponent } from "../../core/AviasalesComponent";

export default class LeftSidebar extends AviasalesComponent {
  static className = `left_sidebar`
  toHTML(){
    return `<h1>List</h1>`
  }
}