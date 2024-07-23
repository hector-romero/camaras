<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="in-out">
      <div :key="route.path" class="page">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.page {
  background-color: #181818;
  position: fixed;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  top: 0;
  left: 0;
  overflow: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: transform .3s ease-in-out, opacity .3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  z-index: -1;
}

</style>
