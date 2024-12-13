<template>
  <v-dialog
    :value="dialog"
    @input="$emit('update:dialog', $event)"
    max-width="600px"
  >
    <v-card>
      <v-card-title class="headline">User Details</v-card-title>
      <v-tabs v-model="tab" slider-color="primary">
        <v-tab>Contact Info</v-tab>
        <v-tab>Company</v-tab>
        <v-tab>Address</v-tab>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <div><strong>Email:</strong> {{ selectedUser.email }}</div>
              <div><strong>Phone:</strong> {{ selectedUser.phone }}</div>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <div>
                <strong>Company:</strong> {{ selectedUser.company.name }}
              </div>
              <div>
                <strong>Catch Phrase:</strong>
                {{ selectedUser.company.catchPhrase }}
              </div>
              <div>
                <strong>Business:</strong> {{ selectedUser.company.bs }}
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <div>
                <strong>Street:</strong> {{ selectedUser.address.street }}
              </div>
              <div><strong>City:</strong> {{ selectedUser.address.city }}</div>
              <div>
                <strong>Zipcode:</strong> {{ selectedUser.address.zipcode }}
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>

      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    selectedUser: Object,
    dialog: Boolean,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

