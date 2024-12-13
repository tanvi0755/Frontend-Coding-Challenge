<template>
  <v-card @click="openDialog(user)" class="mb-4">
    <v-card-title>
      <v-avatar class="me-3" size="56">
        <img :src="user.photo" :alt="user.name" />
      </v-avatar>
      <span>{{ user.name }}</span>
    </v-card-title>
    <v-card-subtitle>{{ user.username }}</v-card-subtitle>
    <v-card-text>
      <div>Email: {{ user.email }}</div>
      <div>Phone: {{ user.phone }}</div>
      <div>Company: {{ user.company.name }}</div>
      <v-chip>{{ user.address.city }}</v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    user: Object,
    openDialog: Function,
  },
  methods: {
    openDialog(user) {
      this.$emit("update:dialog", true);
      this.$emit("update:selectedUser", user);
    },
  },
};
</script>
