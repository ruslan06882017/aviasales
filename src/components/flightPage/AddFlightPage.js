import { AviasalesComponent } from "../../core/AviasalesComponent"
import {apiService} from '../../services/api.service'

export default class AddFlightPage extends AviasalesComponent{

 static className = `addfligh_page`
  constructor($root){
    // console.log($root)
    super($root, {
      name: 'AddFlightPage',
      listeners: ['input', 'click']
    })
  }

  toHTML(){
    return ` 

    <div class="row">
      <div class="col-lg-6">

          <form>
          <div class="form-group">
            <label for="fromCity">Откуда</label>
            <input type="text" class="form-control" id="fromCity" required>
          </div>

          <div class="form-group">
            <label for="toCity">Куда</label>
            <input type="text" class="form-control" id="toCity" required>
          </div>

          <div class="form-group">
            <label for="fromDate">Дата вылета оттуда</label>
            <input type="text" class="form-control" id="fromDate" required>
          </div>

          <div class="form-group">
            <label for="toDate">Дата вылета туда</label>
            <input type="text" class="form-control" id="toDate" required>
          </div>

          <div class="form-group">
            <label for="passenger">Пассажир</label>
            <input type="text" class="form-control" id="passenger">
          </div>

          <div class="form-group">
            <label for="transfer">Пересадка</label>
            <input type="text" class="form-control" id="transfer">
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>
    </div>
    `
  }

  onInput(event){
    // console.log(event)
    // console.log('on input', event.target.value)
  }

  async onClick(event){
    event.preventDefault()

    if (event.target.classList.contains('btn-primary')){


      const fromCity = document.querySelector(`#fromCity`);
      const toCity = document.querySelector(`#toCity`);
  
      const fromDate = document.querySelector(`#fromDate`);
      const toDate = document.querySelector(`#toDate`);
  
      const transfer = document.querySelector(`#transfer`);
      const passenger = document.querySelector(`#passenger`);
  

      // Validation


      // From city
      if (!fromCity.value){
        clearError(fromCity)
      } else {
        validStatus(fromCity)
      }

      // toCity city
      if (!toCity.value){
        clearError(toCity)
      } else {
        validStatus(toCity)
      }

      // fromDate
      if (!fromDate.value){
        clearError(fromDate)
      } else {
        validStatus(fromDate)
      }

      // toDate
      if (!toDate.value){
        clearError(toDate)
      } else {
        validStatus(toDate)
      }

      // transfer
      if (!transfer.value){
        clearError(transfer)
      } else {
        validStatus(transfer)
      }

      // Passenger
      if (!passenger.value){
        clearError(passenger)
      } else {
        validStatus(passenger)
      }

       // Prepare for Firebase
      const formData = {
        toCity: fromCity.value,
        toCity: toCity.value,
        fromDate: fromDate.value,
        toDate: toDate.value,
        transfer: transfer.value,
        passenger: passenger.value
      }
      // Send to 
       await apiService.createPost(formData)
    }

    

  }

}

function clearError(control){
  
  control.closest('.form-group').removeChild(control.nextSibling);
  control.classList.add('is-invalid')
  let hindDiv = document.createElement('div')
  hindDiv.className = 'invalid-feedback'
  let textNode = document.createTextNode('Not correct details')
  hindDiv.appendChild(textNode)    
  control.parentNode.appendChild(hindDiv)

}

function validStatus(control){
  control.classList.remove('is-invalid')
  control.classList.add('is-valid')
}