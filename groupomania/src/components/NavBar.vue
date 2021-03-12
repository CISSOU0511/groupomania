<template>
  <nav>
    <v-app-bar flat app class="indigo darken-4" >
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img
          style="max-width: 200px;"
          src="@/assets/images/icon-left-font-monochrome-white.svg"
          alt="logo"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/Signup" class="indigo darken-4 white--text"> Inscription </v-btn>
      <v-btn to="/Login" class="indigo darken-4 white--text"> Connexion </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="indigo darken-3">
      <v-toolbar-title pt-8 class="indigo darken-4">
        <v-img
          style="max-width: 200px;"
          src="@/assets/images/icon-left-font-monochrome-white.svg"
          alt="logo"
        />
      </v-toolbar-title>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Article", icon: "mdi-view-dashboard" },
      { title: "Photo", icon: "mdi-image" },
      { title: "Commentaire", icon: "mdi-comment" },
    ],
  }),
};
</script>
