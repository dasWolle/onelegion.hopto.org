<template>
  <a :href="hero.pageUrl">
    <div class="p-1">
      <img :src="hero.imageUrl" class="w-full">
    </div>
    <div class="p-3">
      <div class="font-semibold">{{ hero.name }}</div>
      <div class="">{{ hero.type }}</div>
      <div class="">{{ hero.kingdomName }}</div>
    </div>
  </a>
</template>

<script>
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
      hero() { return this.$store.getters.heroClass(parseInt(this.heroClassID_dev)); }
    },
    created() {
      this.heroClassID_dev = this.heroClassID;
    }
  };
</script>
