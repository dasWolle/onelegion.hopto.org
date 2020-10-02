export default {
  currentRaidTeams(state, getters) {
    return getters.raidTeams(
      state.currentGuildEvent.color,
      state.currentGuildEvent.kingdomID,
      state.currentGuildEvent.troopType
    );
  },
  dayEventName: (state) => state.eventNames[state.currentDayEvent.name],
  delveTeams(state) {
    return state.teams.filter(team => team.usableFor.includes("delve"));
  },
  guildEventName: (state) => state.eventNames[state.currentGuildEvent.name],
  guildEventKingdom(state) {
    const kingdomID = state.currentGuildEvent.kingdomID;
    let result = {};
    for (let i = 0; i < state.kingdoms.length; i++) {
      if (state.kingdoms[i].id === kingdomID) {
        result = state.kingdoms[i];
        break;
      }
    }
    return result;
  },
  guildWarTeams: (state) => (color, type) => {
    let result = state.teams.filter(team => team.usableFor.includes("gw"));
    if (color) result = result.filter(team => team.usableFor.includes(color));
    if (type) result = result.filter(team => team.usableFor.includes(type));
    return result;
  },
  heroClass: (state) => (heroID) => {
    let result = {};
    for (let i = 0; i < state.classes.length; i++) {
      if (state.classes[i].id === heroID) {
        result = state.classes[i];
        break;
      }
    }
    return result;
  },
  kingdom: (state) => (id) => {
    let result = {};
    for (let i = 0; i < state.kingdoms.length; i++) {
      if (state.kingdoms[i].id === id) {
        result = state.kingdoms[i];
        break;
      }
    }
    return result;
  },
  raidTeams: (state) => (color, kingdom, type) => {
    kingdom = "" + kingdom;
    return state.teams.filter(function(team) {
      let result = team.usableFor.includes("raid");
      if (color) result = result && team.usableFor.includes(color);
      if (kingdom) result = result && team.usableFor.includes(kingdom);
      if (type) result = result && team.usableFor.includes(type);
      return result;
    });
  },
  searchUnits: (state, getters) => (name) => {
    return getters.search("troops", name).concat(getters.search("weapons", name));
  },
  search: (state) => (type, name) => {
    let result = [];
    if (state[type]) {
      for (let i = 0; i < state[type].length; i++) {
        if (
          (state[type][i].bannerName && state[type][i].bannerName.toLowerCase().includes(name.toLowerCase())) ||
          (state[type][i].kingdomName && state[type][i].kingdomName.toLowerCase().includes(name.toLowerCase())) ||
          (state[type][i].name && state[type][i].name.toLowerCase().includes(name.toLowerCase())) ||
          (state[type][i].type && state[type][i].type.toLowerCase().includes(name.toLowerCase()))
        ) {
          result.push(state[type][i]);
        }
      }
    } else console.error("invalid type: " + type);
    return result;
  },
  team: (state) => (id) => {
    let result = {};
    for (let i = 0; i < state.teams.length; i++) {
      if (state.teams[i].id === id) {
        result = state.teams[i];
        break;
      }
    }
    return result;
  },
  todTeams: (state) => (color) => state.teams.filter(team => team.usableFor.includes("tod") && team.usableFor.includes(color)),
  unit: (state) => (unitID) => {
    if (typeof unitID) unitID = parseInt(unitID);
    const searchArray = unitID >= 6000 ? state.troops : state.weapons;
    let result = {};
    for (let i = 0; i < searchArray.length; i++) {
      if (searchArray[i].id === unitID) {
        result = searchArray[i];
        break;
      }
    }
    return result;
  },
};
