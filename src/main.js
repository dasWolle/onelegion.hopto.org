import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusCircle, faMinusCircle)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router).mount("#app");
