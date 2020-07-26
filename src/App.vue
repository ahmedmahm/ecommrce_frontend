<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";

export default {
  components: {
    navigation,
  },
};
</script>
<style lang="css">
#app {
  background-color: #fff;
  align-items: center;
}
</style>
