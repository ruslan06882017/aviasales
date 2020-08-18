import { AviasalesComponent } from "../../core/AviasalesComponent";

export default class TopFilter extends AviasalesComponent{
  
  static className = `top_filter`

  toHTML(){
    return `
     <div class="container-fluid">
      <div class="row">
          <div class="col-3">
            
          </div>
          <div class="col-9">
            
          
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#">Дешевый</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Оптимальный</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Прямой</a>
              </li>
            </ul>
            <br>
          </div>

      </div>
     </div>`
  }
}