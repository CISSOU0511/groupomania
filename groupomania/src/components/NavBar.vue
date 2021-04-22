<template>
  <nav>
    <v-app-bar app class="indigo darken-4">
      <v-btn to="/Accueil" class="mr-5 indigo darken-4 white--text"> Accueil </v-btn>
      <v-toolbar-title>
        <v-img
          style="max-width: 250px;"
          src="@/assets/images/icon-left-font-monochrome-white.svg"
          alt="logo"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/Signup" class="mr-5 indigo darken-4 white--text"> Inscription </v-btn>
        <v-btn to="/Login" class="mr-5 indigo darken-4 white--text"> Connexion </v-btn>
      </v-toolbar-items>
    </v-app-bar>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      NavBar: false,
    }
  }
};
</script>
