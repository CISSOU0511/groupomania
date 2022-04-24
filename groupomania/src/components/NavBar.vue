<template>
  <nav>
    <v-app-bar flat app class="indigo darken-4">
      <v-app-bar-nav-icon
        class="white--text ml-3"
        @click.native="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span">
          <v-img
            style="max-width: 200px;"
            src="@/assets/images/icon-left-font-monochrome-white.svg"
            alt="logo"
          ></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/Signup" class="mr-5 indigo darken-4 white--text">
        <v-icon class="mr-2">mdi-face-woman-profile</v-icon>Inscription
      </v-btn>
      <v-btn to="/Login" class="mr-5 indigo darken-4 white--text">
        <v-icon class="mr-2">mdi-login</v-icon>Se Connecter
      </v-btn>
      <v-btn to="/NewArticle" class="mr-5 indigo darken-4 white--text">
        <v-icon class="mr-2">mdi-notebook</v-icon> nouvel Article
      </v-btn>
      <v-btn to="/logout" class="mr-5 indigo darken-4 white--text">
        <v-icon class="mr-2">mdi-logout</v-icon>Déconnexion
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      app
      class="pt-10 indigo darken-4"
    >
      <v-list>
        <v-img
          class="logo"
          style="max-width: 200px;"
          src="@/assets/images/icon-left-font-monochrome-white.svg"
          alt="logo"
        ></v-img>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-item-action>
            <v-list-item-icon>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" to="/Articles"
              >{{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      NavBar: false,
      drawer: false,
      menuItems: [
        { icon: "mdi-account", title: "Inscription", link: "/Signup" },
        { icon: "mdi-login", title: "Connexion", link: "/Login" },
        { icon: "mdi-notebook", title: "Articles", link: "/NewArticle" },
        { icon: "mdi-comment", title: "Commentaires", link: "/Commentaires" },
         { icon: "mdi-logout", title: "Déconnexion", link: "/Logout" },
      ],
    };
  },
};
</script>

<style scoped>
.logo {
  margin-left: 15px;
}
</style>
