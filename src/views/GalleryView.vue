<script setup lang="ts">
import {ref} from "vue";
import cameras from "@/config/cameras";
import Galleria from 'primevue/galleria';
import { useRoute } from 'vue-router';
import CameraGalleryItemSD from "@/components/CameraGalleryItemSD.vue";
import CameraGalleryItemHD from "@/components/CameraGalleryItemHD.vue";

const route = useRoute();
const cameraIndex = ref(+route.query.cameraIndex! || 0);
const showThumbnails = ref(true);
</script>

<template>
  <main>
    <RouterLink to="/" replace class="p-galleria-close-button close-button">
      <i class="pi pi-times" />
    </RouterLink>
    <Galleria
      :active-index="cameraIndex"
      :value="cameras"
      :num-visible="cameras.length"
      :show-item-navigators="true"
      :show-indicators="false"
      :show-thumbnail-navigators="false"
      :show-thumbnails="showThumbnails"
      :circular="true"
    >
      <template #item="slotProps">
        <CameraGalleryItemHD :camera="slotProps.item" @zoom="showThumbnails=false;" @no-zoom="showThumbnails=true" />
      </template>
      <template #thumbnail="slotProps">
        <CameraGalleryItemSD :camera="slotProps.item" />
      </template>
    </Galleria>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  height: 100vh;
  height: 100dvh;
  align-content: center;
  align-items: center;
  justify-content: center;
}

.close-button {
  z-index: 2;
  text-decoration: none;
}
</style>

<style lang="scss">
.p-galleria {
  border: none !important;
}
.p-galleria-thumbnails .p-galleria-thumbnails-content {
  // To fix an issue with safari, where this section would show white
  background: transparent !important;
  padding: 0;
  line-height: 0;
}
.p-galleria-thumbnail-item {
  // Remove default opacity given by the plugin.
  opacity: 1 !important;
}

.p-galleria-thumbnail-item.p-galleria-thumbnail-item-current, .p-galleria-thumbnail-item:hover {
  background: #252525;
  border-radius: 5px;
}

</style>
