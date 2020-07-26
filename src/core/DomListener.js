import { capitilize } from "./utils"

export class DomListener {
  constructor($root, listeners = []){
    if (!$root){
      throw new Error(`No $root provided for Dom Listener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners(){
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      // console.log(method)
      const name = this.name || ''
         
      if (!this[method]){
        throw new Error(`Method ${method} not implemented in ${name} component`)
      }
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDomListeners(){
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
  
}
// input => onInput
function getMethodName(eventName){
  return 'on' + capitilize(eventName)
}