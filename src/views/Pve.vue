<template>
  <div class="text-xl p-5">PvE</div>
  <div>
    <template v-for="link in links">
      <router-link :to="link.to">
        {{ link.label }}
      </router-link>
    </template>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Pve",
    data() {
      return {
        links: [
          { to: { name: "Delve" }, label: "Delve" },
        ]
      };
    }
  };
</script>

