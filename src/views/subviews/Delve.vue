<template>
  <div>
    <div class="pt-16 pb-16">
      Delve
    </div>
    <Teams place="delve" :teams="$store.getters.delveTeams"></Teams>
  </div>
</template>

<script>
  import Teams from "@/components/Teams";
  export default {
    name: "Delve",
    components: { Teams }
  };
</script>
