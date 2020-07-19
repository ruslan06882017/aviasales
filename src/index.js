// import './scss/index.scss'

const { Aviasales } = require("./components/aviasales/Aviasales");
import MainSearch from './components/mainsearch/MainSearch'
import TopFilter from './components/topfilter/TopFilter'
import LeftSidebar from './components/leftsidebar/LeftSidebar'
import List from './components/list/List'

const avia = new Aviasales('#app', {
  components: [MainSearch, TopFilter, LeftSidebar, List]
})

avia.render()