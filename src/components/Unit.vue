<template>
  <div class="hidden">
    "id": 6000,
    "rarity": "Common",
    "kingdomId": 3000,
    "colors": 1024,
    "spellId": 7131,
    "description": "Nothing says \"Don't mess with me\" quite like a necklace of your enemies' skulls.",
    "rarityId": 1,
    "typeCode1": "giant",
    "typeCode2": "",
    "maxArmor": 14,
    "maxLife": 30,
    "maxAttack": 19,
    "maxMagic": 0,
    "kingdomName": "Broken Spire",
  </div>
  <div class="p-2">
    <input v-model="unitID_dev" type="number">
    <div class="shadow rounded-lg bg-gray-300 bg-opacity-50">
      <a :href="unit.pageUrl">
        <div class="p-5">
          <img :src="unit.imageUrl" class="w-full">
        </div>
        <div class="p-3">
          <div class="font-semibold">{{ unit.name }}</div>
          <div class="">{{ unit.type }}</div>
          <div class="flex">
            <template v-for="color in colors">
              <div :class="'px-1 rounded-lg bg-opacity-75 bg-mana-' + color">{{ color }}</div>
            </template>
          </div>
        </div>
      </a>
    </div>
  </div>
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
