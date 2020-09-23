<template>
  <h1>Guild Event</h1>
  <!-- personal reward / guild reward -->
  <div class="flex justify-center">
    <router-link :to="{ name: 'tod' }" class="m-2 px-2 shadow hover:shadow-lg rounded-lg text-xl text-gray-800 ">Tower of Doom</router-link>
    <router-link :to="{ name: 'gw' }" class="m-2 px-2 shadow hover:shadow-lg rounded-lg text-xl text-gray-800 ">Guild Wars</router-link>
    <router-link :to="{ name: 'raidBoss' }" class="m-2 px-2 shadow hover:shadow-lg rounded-lg text-xl text-gray-800 ">Raid Boss</router-link>
    <router-link :to="{ name: 'invasion' }" class="m-2 px-2 shadow hover:shadow-lg rounded-lg text-xl text-gray-800 ">Invasion</router-link>
  </div>
  <transition name="fade">
    <router-view class="view"></router-view>
  </transition>
</template>

<script>
  export default {
    name: "GuildEvent"
  };
</script>

