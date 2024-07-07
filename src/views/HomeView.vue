<script setup lang="ts">
import cameras from "@/utils/cameras";
import CameraItem from "@/components/CameraItem.vue";

console.log("cameras", cameras);
</script>

<template>
  <main>
    <CameraItem v-for="(camera, index) in cameras" :camera="camera" :key="index"/>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-wrap: wrap;
}

</style>
