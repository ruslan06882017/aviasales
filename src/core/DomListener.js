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
    // console.log(this.listeners)
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      
      const name = this.name || ''
      if (!this[method]){
        throw new Error(`Method ${method} not implemented in ${name} component`)
      }
      this[method] = this[method].bind(this)
      // console.log(this.$root)
      this.$root.on(listener, this[method])
    })
  }

  removeDomListeners(){
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      // console.log('remove', this[method])
      this.$root.off(listener)
    })
  }
  
}
// input => onInput
function getMethodName(eventName){
  return 'on' + capitilize(eventName)
}