<template>
  <h1>Events</h1>

  <div>
    <router-link :to="{ name: $store.state.currentGuildEvent }"><h2>Guild Event</h2></router-link>

  </div>
  <div>
    <h2>Day/Weekend Event</h2>
  </div>
</template>

<script>
  export default {
    name: "Events"
  };
</script>

