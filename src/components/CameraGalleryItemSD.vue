<script setup lang="ts">
import type {PropType} from "vue";
import {type Camera} from "@/config/cameras";

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

// This is because primevue automatically uses the touchevents to switch to the next image in the
// gallery, ignoring the actual thumbnail clicked
const cancelTouchEvents = (e: TouchEvent) => {
  e.stopPropagation();
  e.stopImmediatePropagation();
};

</script>

<template>
  <img :src="camera.sd.src" :alt="camera.name" class="sd-img" @touchend="cancelTouchEvents">
</template>

<style scoped lang="scss">
.sd-img {
  object-fit: contain;
  object-position: center;
  max-height: calc(20vh );
  max-height: calc(20dvh);
  width: 100%;
  height: 100%;
}

</style>
