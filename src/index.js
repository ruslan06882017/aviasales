import './scss/index.scss'
import { Router } from './core/routes/Router'
import { DashboardsPage } from './pages/DashboardPage'

const { Aviasales } = require("./components/aviasales/Aviasales");
/* import MainSearch from './components/mainsearch/MainSearch'
import TopFilter from './components/topfilter/TopFilter'
// import LeftSidebar from './components/leftsidebar/LeftSidebar'
import List from './components/list/List' */
import AddFlightPage from './components/flightPage/AddFlightPage'

const avia = new Aviasales('#app', {
  // components: [MainSearch, TopFilter, List]
  components: [AddFlightPage]
})

avia.render()

/* 
new Router('#app', {
  dashboard: DashboardsPage
}) */