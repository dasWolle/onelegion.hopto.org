import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

export default createStore({
  state: {
    currentGuildEvent: "tod",
    currentDayEvent: "pet",
    teams: [
      {
        banner: "Banner",
        description: "Beschreibung",
        for: [ "delve" ],
        heroClass: "Klasse",
        name: "Team 1",
        units: [ { name: "Einheit 1" }, { name: "Einheit 2" }, { name: "Einheit 3" }, { name: "Einheit 4" } ],
      }
    ]
  },
  mutations: mutations,
  actions: actions,
  getters: getters
})
