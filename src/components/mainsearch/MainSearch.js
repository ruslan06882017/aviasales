export class MainSearch {
  constructor (selector, options){
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
}