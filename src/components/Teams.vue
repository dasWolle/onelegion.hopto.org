<template>
  <div class="">
    <h4 class="mb-4">Teams für {{ place }}:</h4>
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
      teams: Array,
      mop: Boolean
    }
  };
</script>
