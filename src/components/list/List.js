import { AviasalesComponent } from "../../core/AviasalesComponent";

export default class List extends AviasalesComponent{
  static className = `list`
  toHTML(){
    return `<h1> List </h1>`
  }
}