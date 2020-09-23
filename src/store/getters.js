export default {
  currentRaidTeams(state, getters) {
    return getters.raidTeams(
      state.currentGuildEvent.kingdomID,
      state.currentGuildEvent.troopType
    );
  },
  dayEventName: (state) => state.eventNames[state.currentDayEvent.name],
  delveTeams(state) {
    return state.teams.filter(team => team.for.includes("delve"));
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
    let result = state.teams.filter(team => team.for.includes("gw"));
    if (color) result = result.filter(team => team.for.includes(color));
    if (type) result = result.filter(team => team.for.includes(type));
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
  raidTeams: (state) => (kingdom, type) => {
    kingdom = "" + kingdom;
    return state.teams.filter(team => team.for.includes("raid") && team.for.includes(kingdom) && team.for.includes(type));
  },
  searchUnits: (state) => (name) => {
    let result = [];
    for (let i = 0; i < state.troops.length; i++) {
      if (state.troops[i].name.toLowerCase().includes(name.toLowerCase())) {
        result.push(state.troops[i]);
      }
    }
    return result;
  },
  todTeams: (state) => (color) => state.teams.filter(team => team.for.includes("tod") && team.for.includes(color)),
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
