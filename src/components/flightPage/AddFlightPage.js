import { AviasalesComponent } from "../../core/AviasalesComponent"


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
            <label for="fromFld">Откуда</label>
            <input type="text" class="form-control" id="fromFld"">
          </div>

          <div class="form-group">
            <label for="toFld">Куда</label>
            <input type="text" class="form-control" id="toFld"">
          </div>

          <div class="form-group">
            <label for="fromDate">Дата вылета оттуда</label>
            <input type="text" class="form-control" id="fromDate"">
          </div>

          <div class="form-group">
            <label for="toDate">Дата вылета туда</label>
            <input type="text" class="form-control" id="toDate"">
          </div>

          <div class="form-group">
            <label for="passenger">Пассажир</label>
            <input type="text" class="form-control" id="passenger"">
          </div>

          <div class="form-group">
            <label for="transfer">Пересадка</label>
            <input type="text" class="form-control" id="transfer"">
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

  onClick(event){
    event.preventDefault()
    const from = document.querySelector(`#fromFld`).value;
    // let formData = new FormData();
    // formData.append('from', from);
    
  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyBfNLDiz3cTEZyroGtDxK_sWUu5hl6b5x0",
    authDomain: "test-4f09e.firebaseapp.com",
    databaseURL: "https://test-4f09e.firebaseio.com",
    projectId: "test-4f09e",
    storageBucket: "test-4f09e.appspot.com",
    messagingSenderId: "28618992518",
    appId: "1:28618992518:web:7ab59c399eca170df55a07"
  };
  // Initialize Firebase
 
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);

  }

   let messageRef = firebase.database().ref('messages');
   let newMessageRef = messageRef.push()
    newMessageRef.set({
      from: 'Ruslan 007'
    })
    

  }

}