export default {
  delveTeams(state){
    return state.teams.filter(team => team.for.includes("delve"));
  }
}
