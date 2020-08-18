import { AviasalesComponent } from "../../core/AviasalesComponent"


export default class MainSearch extends AviasalesComponent{
/*   constructor (selector, options){
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
 */
 static className = `main_search`
  constructor($root){
    // console.log($root)
    super($root, {
      name: 'MainSearch',
      listeners: ['input', 'click']
    })
  }

  toHTML(){
    return ` <br>
      <div class="main-search-groups">
    
           <input type="text" class="form-control from-city" id="fromCity" placeholder="From City">
           <input type="text" class="form-control to-city" id="toCity" placeholder="to City">

           <input type="text" class="form-control from-date" id="fromDate" placeholder="From Date">
           <input type="text" class="form-control to-date" id="toDate" placeholder="To Date">

          <select class="form-control" id="passenger">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
         </select>

        
         <button type="button" class="btn btn-primary">Найти</button>
      </div>
      <br> <br>
    `
  }

  onInput(event){
    // console.log(event)
    console.log('on input', event.target.value)
  }

  onClick(event){
    console.log(`Clicked`)
  }

}