<template>
  <div id="footer" class="w-full bg-blue-200 p-3 text-center flex-grow-0 flex-shrink-0">
    <div class="text-xl p-3 mb-3" @click="$store.dispatch('print')">~ FOOTER ~</div>
    <div class="text-gray-800">- Alle Angaben ohne Gewähr. -</div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  };
</script>
