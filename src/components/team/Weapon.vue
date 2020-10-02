<template>
  <a :href="weapon.pageUrl">
    <div class="p-1">
      <img :src="weapon.imageUrl" class="w-full">
    </div>
    <div class="p-3">
      <div class="font-semibold">{{ weapon.name }}</div>
      <div class="">{{ weapon.type }}</div>
      <div class="flex">
        <template v-for="color in colors">
          <div :class="'px-1 mr-1 rounded-lg bg-opacity-75 bg-mana-' + color">{{ color }}</div>
        </template>
      </div>
    </div>
  </a>
</template>

<script>
  import { getColor } from "@/assets/js/helper";

  export default {
    name: "Weapon",
    props: {
      weaponID: Number
    },
    data() {
      return {
        weaponID_dev: -1,
      };
    },
    computed: {
      colors() { return getColor(this.weapon.colors); },
      weapon() { return this.$store.getters.unit(parseInt(this.weaponID_dev)); }
    },
    created() {
      this.weaponID_dev = this.weaponID;
    }
  };
</script>
