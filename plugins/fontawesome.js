import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faEllipsisV, faHome, faHdd } from '@fortawesome/free-solid-svg-icons'
import { faHotjar} from '@fortawesome/free-brands-svg-icons'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
config.autoAddCss = false

library.add(faSearch, faEllipsisV, faHome, faHotjar, faPlayCircle, faHdd)

Vue.component('FaIcon', FontAwesomeIcon)
