<template>
    <v-navigation-drawer
        location="right"
        permanent
    >
        <template v-slot:prepend>
        <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"
            subtitle="Logged in"
            title="Jane Smith"
        ></v-list-item>
        </template>

        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item 
            prepend-icon="mdi-home" 
            title="API Dashboard" 
            :to="{ name: 'dashboard' }"
        ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>