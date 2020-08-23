import { AviasalesComponent } from "../../core/AviasalesComponent"
import { apiService } from "../../services/api.service"

export default class listView extends AviasalesComponent{

 static className = `listview_page`
  constructor($root){
    super($root, {
      name: 'listViewPage',
      listeners: ['click']
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

  onClick(event){
    console.log(`clicked`)
  }
  

  async init(){
    let mainTable = document.querySelector('#tbl-flight-details')
    let mainTableBody = ``
    let i = 0
    const posts = await apiService.getPosts()
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
          <td class='remove-row' data-id="${key}"> Delete </td>
        </tr>
      `
    })  
      
     mainTable.insertAdjacentHTML('beforeend', mainTableBody)

  }


}