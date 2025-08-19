<script setup lang="ts">
import { RouterView } from 'vue-router';
//@ts-ignore
import Vue3PullToRefresh from '@amirafa/vue3-pull-to-refresh';

</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="in-out">
      <div :key="route.path" class="page">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
  <Vue3PullToRefresh
    :distance="32" :duration="100" :size="32" :options="{ color: '#424040', bgColor: 'rgba(251,251,251,0.50)' }"
  />
</template>

<style scoped lang="scss">
@use "./assets/_mixins.scss" as *;
.page {
  background-color: #181818;
  position: fixed;
  @include dynamic-height(100);
  @include dynamic-width(100);
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
