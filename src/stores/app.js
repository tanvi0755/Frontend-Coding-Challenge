import { defineStore } from 'pinia';
import axios from 'axios';

export const useAppStore = defineStore('app', {
  state: () => ({
    users: [],
    loading: false,
    error: null,
    searchQuery: '',
    isGridView: true,
  }),

  getters: {
    filteredUsers: (state) => {
      console.log('Filtering users with search query:', state.searchQuery);
      return state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          user.company.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = usersResponse.data.map((user) => ({
          ...user,
          photo: `https://randomuser.me/api/portraits/women/${user.id}.jpg`,
        }));
      } catch (error) {
        this.error = 'Failed to fetch user data. Please try again.';
      } finally {
        this.loading = false;
      }
    },
    toggleView() {
      this.isGridView = !this.isGridView;
    },
  },
});
