<script setup lang="ts">
import cameras from "@/config/cameras";
import CameraItem from "@/components/CameraItem.vue";


</script>

<template>
  <main>
    <CameraItem v-for="(camera, index) in cameras" :key="index" :camera="camera" :index="index" />
  </main>
</template>

<style scoped lang="scss"></style>
