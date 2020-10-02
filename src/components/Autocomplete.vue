<template>
  <div class="relative">
    <input
      @focusin.stop="show = true"
      :id="this.id"
      @input.stop="(e) => $emit('input', e.target.value)"
      type="text"
      v-model="content"
    >
    <div class="absolute select_dropdown" :class="show ? '' : 'hidden'">
      <template v-for="entry in list">
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
        content: "",
        id: "aci_" + Math.random(),
        show: false,
      };
    },
    methods: {
      close(e) {
        if (e.target.id !== this.id) this.show = false;
      },
      selected(entry) {
        this.$emit("selected", entry);
        this.content = entry.name;
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

