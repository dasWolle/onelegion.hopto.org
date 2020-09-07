<template>
  <div class="m-2 h-full shadow rounded-lg bg-gray-300 bg-opacity-50">
    <img :src="bannerImage">
    <div class="p-3">{{ bannerName }}
    </div>
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
