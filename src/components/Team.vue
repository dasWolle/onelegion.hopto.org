<template>
  <div class="">
    <h5>{{ team.name }}</h5>
    <div class="flex">
      <template v-for="unitID in team.units">
        <Unit :unitID="unitID"></Unit>
      </template>
      <div class="p-3">{{ team.banner }}</div>
      <div class="p-3">{{ team.heroClass }}</div>
      <div class="px-3">
        <div class="font-bold text-center px-2 text-green-600"><font-awesome-icon icon="plus-circle"></font-awesome-icon></div>
        <div class="font-bold text-center px-2 text-red-300"><font-awesome-icon icon="minus-circle"></font-awesome-icon></div>
      </div>
    </div>
    <div>Beschreibung</div>
  </div>
</template>

<script>
  import Unit from "@/components/Unit";

  export default {
    name: "Team",
    components: { Unit },
    props: { team: Object }
  };
</script>

