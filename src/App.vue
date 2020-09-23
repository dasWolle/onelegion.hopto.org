<template>
  <div id="app" class="h-screen w-screen overflow-hidden text-gray-800">
    <Navbar></Navbar>
    <div class="h-screen w-screen overflow-auto flex flex-col justify-between">
      <Header></Header>
      <div class="relative overflow-hidden flex-grow bg-gray-700">
        <img class="h-full w-full object-cover absolute" src="./assets/raid-boss-background.png">
        <div class="h-full relative z-10 overflow-auto">
          <div class="container mx-auto min-h-full p-3 bg-gray-300 bg-opacity-75">
            <router-view />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from "@/components/Footer";
  import Header from "@/components/Header";
  import Navbar from "@/components/Navbar";

  export default {
    name: "app",
    components: {
      Footer,
      Header,
      Navbar,
    },
    mounted() {
      this.$store.dispatch("init");
    }
  };
</script>

<style lang="scss">
  @import "./scss/main";
</style>
