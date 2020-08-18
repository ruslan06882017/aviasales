export function createData(){
  return `
    <div class="container-fluid">
      <div class="row">
          <div class="col-3">
              <ul>
                <li> Все <input type="checkbox" /> </li>
                <li> Без пересадки <input type="checkbox" /> </li>
                <li> 1 пересадка <input type="checkbox" /> </li>
                <li> 2 пересадки <input type="checkbox" /> </li>
              </ul>
          </div>

          <div class="col-9 ">
              <div class="card border-primary mb-3" style="max-width: 60rem;">
                <div class="card-header">Header</div>
                  <div class="card-body">
                      <h4 class="card-title">Turkish Air lines</h4>
                      <p class="card-text"> 06:30 AM to 12:20 PM</p>
                  </div> 
                </div>
              </div>
          </div>

          <div class="col-9">
              <div class="card border-primary mb-3" style="max-width: 60rem;">
                <div class="card-header">Header</div>
                  <div class="card-body">
                    <h4 class="card-title"> Air Astana </h4>
                    <p class="card-text"> 11:30 AM to 16:20 PM</p>
                  </div>
                </div>
              </div>
          </div>


      </div>      
  </div>
  `
}