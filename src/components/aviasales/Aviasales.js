import {$} from '../../core/dom'

export class Aviasales {
  constructor (selector, options){
    this.$el = $(selector)
    this.components = options.components || []
  }
  
  getRoot(){
    const $root = $.create('div', 'aviasales')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    // console.log(this.components)
    return $root
  }

  render(){
    this.$el.append(this.getRoot())
    this.components.map(component => component.init());
  }
}
