import { AviasalesComponent } from "../../core/AviasalesComponent";
import { createData } from "./data.template";

export default class List extends AviasalesComponent{
  static className = `list`
  toHTML(){
    return createData()
  }
}