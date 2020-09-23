<template>
  <div id="nav" class="bg-blue-900 text-white absolute w-screen">
    <div class="flex items-center justify-between py-2 px-4">
      <div>
        <router-link to="/">LOGO</router-link>
      </div>
      <div class="relative z-20">
        <div
          ref="hamburger"
          class="flex flex-col items-center p-3 cursor-pointer"
          @click="isOpen = !isOpen"
        >
          <div class="border-white border-solid border-t-2 w-6"></div>
          <div class="border-white border-solid border-t-2 mt-2 w-4"></div>
          <div class="border-white border-solid border-t-2 mt-2 w-6"></div>
        </div>
        <transition name="fade">
          <div
            v-if="isOpen"
            class="w-32 bg-gray-100 text-gray-700 flex-col flex p-3 object-cover absolute right-0 rounded-lg -mt-2"
          >
            <template v-for="link in links">
              <div class="px-1 rounded hover:text-black hover:bg-gray-300 text-2xl sm:text-lg" @click="close">
                <router-link :key="link.to" :to="link.to">
                  {{ link.label }}
                </router-link>
              </div>
            </template>
          </div>
        </transition>
      </div>
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 opacity-0 bg-black z-10"
          @click="isOpen = false"
        ></div>
      </transition>
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
          { to: { name: "TeamEditor" }, label: "Team Editor" },
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
