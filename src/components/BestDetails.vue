<template>
  <div>
    Details {{title}}
  </div>
</template>

<script>

export default {
  name: "BestDetils",
  data() {
      return {
          title: this.$route.params.name
      }
  }
};
</script>
