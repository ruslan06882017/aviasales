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
    return `
      <input type="text" class="form-control" placeholder="Username">
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