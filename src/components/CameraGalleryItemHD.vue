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
  <div class="img-container" :class="[zoomStatus]" @dblclick="cycleZoom">
    <img ref="img" :src="camera.hd.src" :alt="camera.name" class="hd-img">
  </div>
</template>

<style scoped lang="scss">
@use "../assets/_mixins.scss" as *;
.hd-img {
  object-fit: contain;
  width: 100%;
  @include dynamic-height(80);
  @include dynamic-min-height(80);
}

.img-container {
  overflow: scroll;
  &.full-height, &.full-width {
    text-align: center;
    @include dynamic-width(100);
    @include dynamic-height(100);
  }
  &.full-width .hd-img {
      width: 100%;
      height: auto;
  }

  &.full-height .hd-img {
      height: 100%;
      width: auto;
  }
}
</style>
