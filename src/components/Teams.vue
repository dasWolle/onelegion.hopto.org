<template>
  <div class="">
    <h4 class="mb-4">Teams for {{ place }}:</h4>
    <div class="flex flex-col">
      <template v-for="team in teams">
        <Team :team="team"></Team>
      </template>
    <template v-if="!teams || teams.length === 0">
      <span>No one has entered a Team for this event with the current kingdom </span>
      <span v-if="kingdomName" class="text-sm">({{ kingdomName }}) </span>
      <span>and color </span>
      <span v-if="color" class="text-sm">({{ color }})</span>
      <span>.</span>
    </template>
    </div>
  </div>
</template>

<script>
  import Team from "@/components/team/Team";

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
