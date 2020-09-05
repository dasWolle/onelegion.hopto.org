<template>
  <div class="home p-5">
    <h1>Welcome to One Legion</h1>
    <p class="mt-3 mb-4 text-center">Very greatly texted and interesting Intro... or not because it is for members only?</p>
    <Motd></Motd>
  </div>
</template>

<script>

import Motd from "@/components/Motd";
export default {
  name: 'Home',
  components: { Motd }
}
</script>
