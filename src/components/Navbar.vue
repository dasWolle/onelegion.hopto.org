<template>
  <div class="bg-blue-100 absolute w-screen" id="nav">
    <div class="flex items-center justify-between py-2 px-4">
      <div>
        <router-link to="/">LOGO</router-link>
      </div>
      <div class="relative z-20">
        <div
          @click="isOpen = !isOpen"
          class="flex flex-col items-center p-3 cursor-pointer"
          ref="hamburger"
        >
          <div class="border-black border-solid border-t-2 w-6"></div>
          <div class="border-black border-solid border-t-2 mt-2 w-4"></div>
          <div class="border-black border-solid border-t-2 mt-2 w-6"></div>
        </div>
        <div
          class="bg-gray-100 text-gray-700 flex-col flex p-3 object-cover absolute right-0 rounded-lg -mt-2"
          v-if="isOpen"
        >
          <template v-for="link in links">
            <div @click="close" class="px-1 rounded hover:text-black hover:bg-gray-300 text-2xl sm:text-lg">
              <router-link :key="link.to" :to="link.to">
                {{ link.label }}
              </router-link>
            </div>
          </template>
        </div>
      </div>
      <div
        @click="isOpen = false"
        class="fixed inset-0 opacity-25 bg-black z-10"
        v-if="isOpen"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {
        isOpen: false,
        links: [
          { to: { name: "Home" }, label: "Home" },
          { to: { name: "About" }, label: "About" },
          { to: { name: "Events" }, label: "Events" },
          { to: { name: "PvE" }, label: "PvE" },
          { to: { name: "PvP" }, label: "PvP" },
        ]
      };
    },
    methods: {
      close() {
        this.isOpen = false;
      },
      keypress(event) {
        if (event.key === "Esc" || event.key === "Escape") this.isOpen = false;
      }
    },
    mounted() {
      document.addEventListener("keydown", this.keypress);
    },
    beforeDestroy() {
      document.removeEventListener("click", this.keypress);
    }
  };
</script>
