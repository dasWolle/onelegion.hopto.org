<template>
  <div>{{ unit.name }}</div>
</template>

<script>
  export default {
    name: "Unit",
    props: {
      unit: Object
    }
  };
</script>
