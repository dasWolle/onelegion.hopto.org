<template>
  <div class="flex">
    <div>Teams für {{ place }}</div>
    <template v-for="team in teams">
      <Team :team="team"></Team>
    </template>
  </div>
</template>

<script>
  import Team from "@/components/Team";
  export default {
    name: "Teams",
    components: { Team },
    props: {
      place: String,
      teams: Array
    }
  };
</script>
