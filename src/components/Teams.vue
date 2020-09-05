<template>
  <div class="">
    <h4 class="mb-4">Teams for {{ place }}:</h4>
    <template v-for="team in teams">
      <Team :team="team"></Team>
    </template>
    <template v-if="!teams || teams.length === 0">
      <span>No one has entered a Team for this event with the current kingdom </span>
      <span class="text-sm" v-if="kingdomName">({{ kingdomName }}) </span>
      <span>and color </span>
      <span class="text-sm" v-if="color">({{ color }})</span>
      <span>.</span>
    </template>
  </div>
</template>

<script>
  import Team from "@/components/Team";
  export default {
    name: "Teams",
    components: { Team },
    props: {
      color: String,
      kingdomName: String,
      place: String,
      teams: Array,
    }
  };
</script>
