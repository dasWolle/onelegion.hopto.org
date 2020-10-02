export default {
  kingdoms(state, payload) { state.kingdoms = payload; },
  team(state, payload) {
    if (payload.id || payload.id === 0) {
      let result = -1;
      for (let i = 0; i < state.teams.length; i++) {
        if (state.teams[i].id === payload.id) {
          result = i;
          break;
        }
      }
      if (result !== -1) state.teams[result] = payload.team;
    } else state.teams.push(payload.team);
  },
  troops(state, payload) { state.troops = payload; },
};
