<template>
  <img :src="bannerImage">
  <div class="p-3">{{ bannerName }}
  </div>
</template>

<script>

  export default {
    name: "Unit",
    props: {
      bannerKingdomID: Number
    },
    data() {
      return {
        bannerKingdomID_dev: -1,
      };
    },
    computed: {
      bannerName() {
        return this.$store.getters.kingdom(this.bannerKingdomID).bannerName;
      },
      bannerImage() {
        return this.$store.getters.kingdom(this.bannerKingdomID).bannerImageUrl;
      }
    },
    created() {
      this.bannerKingdomID_dev = this.bannerKingdomID;
    }
  };
</script>
