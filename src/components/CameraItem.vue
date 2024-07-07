<script setup lang="ts">
  import type {PropType} from "vue";
  import type {Camera} from "@/utils/cameras";

  defineProps({
    camera: {
      type: Object as PropType<Camera>,
      required: true
    }
  })
</script>

<template>
  <div class="camera-container">
  <img :src="camera.sd.src" :alt="camera.name" style="width: 100%;height: auto;" loading="lazy"/>
  </div>
</template>

<style scoped>
.camera-container {
  width: 50%;
}

@media screen and (max-width: 1200px)  {
  .camera-container {
    width: 100%;
  }
}
</style>
