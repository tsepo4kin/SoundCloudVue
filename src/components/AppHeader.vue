<template>
  <div>
    <v-toolbar dark class="purple darken-4">
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title>
          TSPSound
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <div class="white mx-1 pa-1 rounded" style="width: 40%">
        <v-text-field light hide-details color="black" placeholder="track name">
          <template v-slot:append>
            <v-btn small icon>
              <v-icon class="title">mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </div>

      <v-toolbar-items>
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="purple darken-4 py-1">
      <player></player>
    </div>
  </div>
</template>

<script>
import Player from "@/components/Player";
export default {
  computed: {
    menuItems() {
      return [
        {
          title: "Catalog",
          path: "/catalog",
          icon: "mdi-music-note-plus",
        },
        {
          title: "Library",
          path: "/library",
          icon: "mdi-music-box-multiple-outline",
        },
        {
          title: "Profile",
          path: "/profile",
          icon: "mdi-account-box",
        },
      ];
    },
  },
  components: {
    Player,
  },
};
</script>

<style></style>
