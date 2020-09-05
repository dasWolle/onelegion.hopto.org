<template>
  <div class="">
    <h2>Raid Boss</h2>
    <div>
      This weeks color is <span :class="'text-' + $store.state.currentColor + '-600 rounded-lg px-1'">{{ $store.state.currentColor }}</span>
    </div>
    <div class="">
      <Teams
        :color="$store.state.currentGuildEvent.color"
        :kingdomName="$store.getters.guildEventKingdom.name"
        :teams="$store.getters.currentRaidTeams"
        place="Raid Boss"
      ></Teams>
    </div>
  </div>
</template>

<script>
  import Teams from "@/components/Teams";

  export default {
    name: "RaidBoss",
    components: { Teams }
  };
</script>

