<template>
  <nav>
    <v-app-bar flat app class="indigo darken-4">
      <v-app-bar-nav-icon
        class="white--text ml-3"
        @click.native="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
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
        <v-icon class="mr-2">mdi-notebook</v-icon>Articles
      </v-btn>
      <v-btn to="/comment" class="mr-5 indigo darken-4 white--text">
        <v-icon class="mr-2">mdi-comment</v-icon>Commentaires
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer style="cursor: pointer"
      temporary
      v-model="drawer"
      app
      class="pt-10 indigo darken-4"
    >
      <v-list>
        <v-list-item v-for="item in menuItems" 
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
    <v-container class="container">
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item style="cursor: pointer"
              v-for="Articles in Articles"
              :src="Articles.imageUrl"
              :key="Articles.id"
            >
              <div class="title">
                {{ Articles.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </nav>
</template>

<script>

export default {
  name: "Accueil",

  data() {
    return {
      NavBar: false,
      drawer: false,
      Articles: [
        {
          imageUrl:
            "https://www.nyc.fr/wp-content/uploads/2015/07/New_York_City-770x385.jpg",
          title: "New York",
        },
        {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Eiffel_trocadero_i.jpg/240px-Eiffel_trocadero_i.jpg",
          title: "Paris",
        },
      ],
      menuItems: [
        { icon: "mdi-account", title: "Inscription", link: "/Signup" },
        { icon: "mdi-login", title: "Connexion", link: "/Login" },
        { icon: "mdi-notebook", title: "Articles", link: "/Articles" },
        { icon: "mdi-comment", title: "Commentaires", link: "/Commentaires" },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  position:absolute;
  bottom:50px;
  background-color: rgba(0,0,0,0.5);
  color:white;
  font-size: 2em;
  padding: 20px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
</style>
