<template>
  <div class="flex flex-col">
    Teams
    <div class="grid grid-cols-2 gap-3">
      <template v-for="team in teams">
        <div class="bg-gray-800 text-white rounded-lg ">
          <Team :team="team"></Team>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import Team from "@/components/team/Team";

  export default {
    name: "Teams",
    components: { Team },
    computed: {
      teams() {
        return this.$store.state.teams;
      },
    },
  };
</script>
