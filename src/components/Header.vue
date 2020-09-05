<template>
  <div class="w-full bg-blue-200 pt-20 pb-3 flex-grow-0 flex-shrink-0">
    <h1>
      <router-link :to="{ name: $store.state.currentGuildEvent.name }">
        ~ This week: {{ $store.getters.guildEventName }} ~
      </router-link>
    </h1>
  </div>
</template>

<script>
  export default {
    name: "Header"
  };
</script>
