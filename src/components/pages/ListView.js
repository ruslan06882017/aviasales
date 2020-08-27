import { AviasalesComponent } from "../../core/AviasalesComponent"
import { apiService } from "../../services/api.service"

export default class ListView extends AviasalesComponent{

 static className = `listview_page`
  constructor($root){
    super($root, {
      name: 'ListViewPage',
      listeners: ['input', 'click']
    })
  }

  toHTML(){
    return `
      <div class="row">
        <div class="col-lg-12">
             <table class="table" id="tbl-flight-details">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">From City</th>
                  <th scope="col">To City</th>
                  <th scope="col">From Date</th>
                  <th scope="col">To Date</th>
                  <th scope="col">Transfer</th>
                  <th scope="col"> Passenger </th>
                  <th scope="col"> Action </th>
                </tr>
              </thead>
          </table>
        </div>
      </div>
    `
  }
  
  init(){
    super.init()
    getHTMLRows();

    var firebaseConfig = {
      apiKey: "AIzaSyDzInWLI6tOPzlWozgxapnuEbRXf6sTR0c",
      authDomain: "ruslan-98c2d.firebaseapp.com",
      databaseURL: "https://ruslan-98c2d.firebaseio.com",
      projectId: "ruslan-98c2d",
      storageBucket: "ruslan-98c2d.appspot.com",
      messagingSenderId: "30453875846",
      appId: "1:30453875846:web:7fbec7ba4e28640cb0fd07"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    let vr = `-MF_z4uGqWHnHbh6456df`
    firebase.database().ref('posts/' + vr).set({
      'name': 'Ruslan Gusseinov',
      'from': 'ALA',
      'to': 'Astana',
      'fromDate': '2020-01-01',
      'toDate': '2020-05-05'
    });
   
    

  }


  onClick(event){
    const info = event.target
    if (info.tagName == 'A'){
      const rowId = info.closest('td').dataset.id
      // apiService.removePost()
      // console.log(`clicked on remove`, info.closest('td').dataset.id)
      this.handleRemove(rowId)
      // location.reload()
    }
  }

  handleRemove(rowId) {
    console.log(rowId)
    firebase.database().ref('posts').child(rowId).remove();
  }

  onInput(event){
    // console.log(event)
    console.log('on input', event.target.value)
  }

}


async function getHTMLRows(){


  let mainTable = document.querySelector('#tbl-flight-details')
  let mainTableBody = ``
  let i = 0
  const posts = await apiService.getPosts()
  // console.log(posts)
  if (posts){
      Object.keys(posts).forEach(key => {
        const el = posts[key]
        i ++;
        mainTableBody += `
          <tr>
            <th scope="row">${i}</th>
            <td> ${el.fromCity} </td>
            <td> ${el.toCity} </td>
            <td> ${el.fromDate} </td>
            <td> ${el.toDate} </td>
            <td> ${el.transfer} </td>
            <td> ${el.passenger} </td>
            <td class='remove-row' data-id="${key}"> <a href="#"> Delete </a> </td>
          </tr>
        `
      })
  }
   mainTable.insertAdjacentHTML('beforeend', mainTableBody)


}