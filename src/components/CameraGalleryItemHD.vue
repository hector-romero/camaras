<script setup lang="ts">
import {computed, type PropType, ref} from "vue";
import type {Camera} from "@/config/cameras";

const ZOOM_STATUS_OPTIONS = [null, 'full-width', 'full-height'];

const zoomIndex = ref(0);
const zoomStatus = computed(() => {
  return ZOOM_STATUS_OPTIONS[zoomIndex.value];
});

const emit = defineEmits(['zoom', 'noZoom']);

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



const cycleZoom = () => {
    zoomIndex.value = (zoomIndex.value + 1) % ZOOM_STATUS_OPTIONS.length;
    emit(zoomIndex.value == 0 ? 'noZoom' : 'zoom');
};

</script>

<template>
  <img ref="img" :src="camera.hd.src" :alt="camera.name" class="hd-img" :class="[zoomStatus]" @dblclick="cycleZoom">
</template>

<style scoped lang="scss">
.hd-img {
  object-fit: contain;
  width: 100%;
  height: 80vh;
  height: 80dvh;
  min-height: 80vh;
  min-height: 80dvh;

  &.full-width {
    width: 100vw;
    width: 100dvw;
    height: auto;
  }

  &.full-height {
    height: 100vh;
    height: 100dvh;
    width: auto;
  }
}
</style>
