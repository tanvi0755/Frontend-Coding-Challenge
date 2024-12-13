<template>
  <v-container>
    <v-progress-circular v-if="loading" indeterminate color="primary" />
    <v-alert v-if="error" type="error">{{ error }}</v-alert>

    <search-bar />
    <toggle-switch />

    <v-row v-if="isGridView" class="mt-4">
      <v-col
        v-for="user in filteredUsers"
        :key="user.id"
        cols="12"
        md="6"
        lg="4"
      >
        <user-card :user="user" @update:dialog="dialog = true" @update:selectedUser="selectedUser = $event" />
      </v-col>
    </v-row>

    <v-list v-else>
      <v-list-item
        v-for="user in filteredUsers"
        :key="user.id"
        @click="selectUser(user)"
        class="d-flex justify-space-between align-center pa-3"
      >
        <v-list-item-avatar>
          <img :src="user.photo" :alt="user.name" class="rounded-circle" />
        </v-list-item-avatar>

        <v-list-item-content class="d-flex justify-space-between align-center">
          <div>
            <v-list-item-title class="font-weight-bold">{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle class="text--secondary">Email: {{ user.email }}</v-list-item-subtitle>
          </div>

          <div class="text-right">
            <v-list-item-subtitle class="text--secondary">Phone: {{ user.phone }}</v-list-item-subtitle>
            <v-list-item-subtitle class="text--secondary">Company: {{ user.company.name }}</v-list-item-subtitle>
            <v-list-item-subtitle class="text--secondary">City: {{ user.address.city }}</v-list-item-subtitle>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <user-dialog :selectedUser="selectedUser" :dialog="dialog" @update:dialog="dialog = $event" />
  </v-container>
</template>

<script>
import { computed, ref } from 'vue';
import { useAppStore } from '@/stores/app';
import UserCard from '@/components/UserCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import UserDialog from '@/components/UserDialog.vue';

export default {
  components: { UserCard, SearchBar, ToggleSwitch, UserDialog },
  setup() {
    const appStore = useAppStore();
    appStore.fetchUsers();
    const dialog = ref(false);
    const selectedUser = ref(null);

    const selectUser = (user) => {
      selectedUser.value = user;
      dialog.value = true;
    };

    return {
      loading: computed(() => appStore.loading),
      error: computed(() => appStore.error),
      filteredUsers: computed(() => appStore.filteredUsers),
      isGridView: computed(() => appStore.isGridView),
      dialog,
      selectedUser,
      selectUser,
    };
  },
};
</script>
