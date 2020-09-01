<template>
  <div class="bg-gray-900" id="nav">
    <div class="flex items-center justify-between py-2 px-4" id="nav">
      <div>
        <router-link class="text-white" to="/">LOGO</router-link>
      </div>
      <div class="relative z-20">
        <div
          @click="isOpen = !isOpen"
          class="flex flex-col items-center p-3 cursor-pointer"
          ref="hamburger"
        >
          <div class="border-white border-solid border-t-2 w-6"></div>
          <div class="border-white border-solid border-t-2 mt-2 w-4"></div>
          <div class="border-white border-solid border-t-2 mt-2 w-6"></div>
        </div>
        <div
          class="bg-gray-800 flex-col flex p-3 object-cover absolute right-0 rounded-lg -mt-2"
          v-if="isOpen"
        >
          <template v-for="link in links">
            <div @click="close" class="text-gray-200 px-1 rounded hover:text-white hover:bg-gray-700 text-2xl sm:text-lg">
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
          { to: "/", label: "Home" },
          { to: "About", label: "About" }
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
