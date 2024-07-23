<script setup lang="ts">
  import type {PropType} from "vue";
  import type {Camera} from "@/config/cameras";

  defineProps({
    camera: {
      type: Object as PropType<Camera>,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  });
</script>

<template>
  <RouterLink class="camera-container" replace :to="{name: 'gallery', query: {cameraIndex: index}}">
    <img :src="camera.sd.src" :alt="camera.name" style="width: 100%;height: auto;" loading="lazy">
  </RouterLink>
</template>

<style scoped lang="scss">
.camera-container {
  float: left;
  width: 100%;
  //display: inline;
  display: block;
  line-height: 0;
}

@media screen and (min-width: 1200px)  {
  .camera-container {
    width: 50%;
  }
}
</style>
