<template>
  <v-text-field
    v-model="searchQuery"
    label="Search by name or company"
    variant="outlined"
    clearable
  />
  <v-btn @click="handleSearch" color="primary">Search</v-btn>
</template>

<script>
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

export default {
  setup() {
    const appStore = useAppStore();
    const searchQuery = ref(appStore.$state.searchQuery);
    const handleSearch = () => {
      appStore.searchQuery = searchQuery.value;
    };

    return {
      searchQuery,
      handleSearch,
    };
  },
};
</script>
