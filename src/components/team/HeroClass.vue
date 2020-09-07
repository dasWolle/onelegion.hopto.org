<template>
    <div class="m-2 h-full shadow rounded-lg bg-gray-300 bg-opacity-50">
      <a :href="hero.pageUrl">
        <div class="p-1">
          <img :src="hero.imageUrl" class="w-full">
        </div>
        <div class="p-3">
          <div class="flex">
            <template v-for="color in colors">
              <div :class="'px-1 mr-1 rounded-lg bg-opacity-75 bg-mana-' + color">{{ color }}</div>
            </template>
          </div>
          <div class="font-semibold">{{ hero.name }}</div>
          <div class="">{{ hero.type }}</div>
          <div class="">{{ hero.kingdomName }}</div>
        </div>
      </a>
    </div>
</template>

<script>
  import { getColor } from "@/assets/js/helper";

  export default {
    props: {
      heroClassID: Number
    },
    data() {
      return {
        heroClassID_dev: -1,
      };
    },
    computed: {
      colors() { return getColor(this.hero.colors); },
      hero() { return this.$store.getters.heroClass(parseInt(this.heroClassID_dev)); }
    },
    created() {
      this.heroClassID_dev = this.heroClassID;
    }
  };
</script>
