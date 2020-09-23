<template>
  <div class="relative">
    <input :id="this.id" class="rounded-lg focus:outline-none px-2 py-1 bg-white" type="text" v-model="value" @focusin="show = true">
    <div class="absolute select_dropdown" :class="show ? '' : 'hidden'">
      <template v-for="entry in $store.getters.searchUnits(value)">
        <div @click="selected(entry)" class="cursor-pointer hover:bg-blue-800 hover:text-white px-2 rounded-lg">
          {{ entry.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Autocomplete",
    props: {
      list: Array
    },
    data() {
      return {
        id: Math.random(),
        show: false,
        value: "",
      };
    },
    methods: {
      close(e) {
        if (e.target.id !== this.id) this.show = false;
      },
      selected(entry) {
        this.$emit("selected", entry);
        this.value = entry.name;
      }
    },
    created() {
      document.addEventListener("click", this.close);
    },
    beforeDestroy() {
      document.removeEventListener("click", this.close);
    }
  };
</script>

