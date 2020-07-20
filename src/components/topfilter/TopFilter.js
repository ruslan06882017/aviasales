import { AviasalesComponent } from "../../core/AviasalesComponent";

export default class TopFilter extends AviasalesComponent{
  
  static className = `top_filter`

  toHTML(){
    return `<h1> Top Filter </h1>`
  }
}