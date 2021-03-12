<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-img
              src="@/assets/images/icon-left-font-monochrome-black.svg"
              alt="logo"
            />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >
        <v-img style="max-width: 200px;"
          src="@/assets/images/icon-left-font-monochrome-black.svg"
          alt="logo"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row wrap justify-space-around>
        <v-flex  xs3 md3>
          <v-btn to="/Signup"> Inscription </v-btn>
        </v-flex>
        <v-flex xs3 md3>
        <v-btn outline to="/Login"> Connexion </v-btn>
        </v-flex>
      </v-layout>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
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
