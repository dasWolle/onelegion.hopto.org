import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

export default createStore({
  state: {
    currentGuildEvent: "tod",
    currentDayEvent: "pet"
  },
  mutations: mutations,
  actions: actions,
  getters: getters
})
