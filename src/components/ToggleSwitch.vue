<template>
    <v-switch :value="isGridView" @change="toggleView" label="Toggle Grid/List View" />
  </template>
  
  <script>
  import { useAppStore } from '@/stores/app';
  
  export default {
    setup() {
      const appStore = useAppStore();
      return {
        isGridView: appStore.isGridView,
        toggleView: appStore.toggleView,
      };
    },
  };
  </script>
  