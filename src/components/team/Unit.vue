<template>
  <a :href="unit.pageUrl">
    <div class="p-1">
      <img :src="unit.imageUrl" class="w-full">
    </div>
    <div class="p-3">
      <div class="flex">
        <template v-for="color in colors">
          <div :class="'px-1 mr-1 rounded-lg bg-opacity-75 bg-mana-' + color">{{ color }}</div>
        </template>
      </div>
      <div class="font-semibold">{{ unit.name }}</div>
      <div class="">{{ unit.type }}</div>
      <div class="">{{ unit.kingdomName }}</div>
    </div>
  </a>
</template>

<script>
  import { getColor } from "@/assets/js/helper";

  export default {
    name: "Unit",
    props: {
      unitID: Number
    },
    data() {
      return {
        unitID_dev: -1,
      };
    },
    computed: {
      colors() { return getColor(this.unit.colors); },
      unit() { return this.$store.getters.unit(parseInt(this.unitID_dev)); }
    },
    created() {
      this.unitID_dev = this.unitID;
    }
  };
</script>
