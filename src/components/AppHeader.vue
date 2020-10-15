<template>
  <v-header>
    <v-container>
      <v-row>
        header
      </v-row>
    </v-container>
  </v-header>
</template>

<script>
export default {

  computed: {
    menuItems() {
      if (this.isAuth) {
        return [
          {
            title: "Catalog",
            path: "/catalog",
            icon: "mdi-calendar-month"
          },
          {
            title: "Library",
            path: "/library",
            icon: "mdi-calendar-month"
          },
          {
            title: "Profile",
            path: "/profile",
            icon: "mdi-account-box"
          }
        ];
      } else {
        return [
          {
            title: "SignIn",
            path: "/signIn",
            icon: "mdi-account-arrow-right"
          },
          {
            title: "SignUp",
            path: "/signUp",
            icon: "mdi-account-check"
          }
        ];
      }
    },
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style></style>
