<template>
  <div class="flex-grow shadow rounded-lg bg-gray-300 text-gray-800 flex flex-col">
    <slot></slot>
    <div>
      <slot name="image"></slot>
    </div>
    <div class="flex flex-col">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card"
  };
</script>
