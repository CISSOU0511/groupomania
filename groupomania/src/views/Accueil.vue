<template>
  <nav>
    <v-app-bar flat app class="indigo darken-4">
      <v-app-bar-nav-icon
        class="white--text"
        @click.native="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-img
            style="max-width: 150px;"
            src="@/assets/images/icon-left-font-monochrome-white.svg"
            alt="logo"
          ></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="v-btn">
        <v-btn
          v-if="isConnected == false"
          to="/Signup"
          class="mr-5 indigo darken-4 white--text"
        >
          <v-icon class="mr-2">mdi-account</v-icon>Inscription
        </v-btn>
        <v-btn
          v-if="isConnected == false"
          to="/Login"
          class="mr-5 indigo darken-4 white--text"
        >
          <v-icon class="mr-2">mdi-login</v-icon>Connexion
        </v-btn>
        <v-btn to="/NewArticle" class="mr-5 indigo darken-4 white--text">
          <v-icon class="mr-2">mdi-notebook</v-icon>Nouvel Article
        </v-btn>
        <v-btn to="/Articles" class="mr-5 indigo darken-4 white--text">
          <v-icon class="mr-2">mdi-notebook</v-icon>Mes Articles
        </v-btn>
        <v-btn to="/Profile" class="mr-5 indigo darken-4 white--text">
          <v-icon class="mr-2">mdi-face-woman-profile</v-icon>
          Profil
        </v-btn>
        <v-btn
          v-if="isConnected == true"
          to="/Logout"
          class="mr-5 indigo darken-4 white--text"
        >
          <v-icon class="mr-2">mdi-logout</v-icon>
          Déconnexion
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      style="cursor: pointer"
      temporary
      v-model="drawer"
      app
      class="pt-10 indigo darken-4"
    >
      <v-list>
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
    <v-layout row wrap>
      <v-flex xs12 sm-6 class="flex">
        <h1>BIENVENUE SUR GROUPOMANIA</h1>
      </v-flex>
    </v-layout>
    <v-container class="container">
      <v-carousel class="carousel">
        <v-carousel-item
          style="cursor: pointer max-width:100px;"
          v-for="article in articles"
          :src="article.imageUrl"
          :key="article.id"
        >
          <div class="title">
            {{ article.contenu }}
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </nav>
</template>

<script>
import Axios from "axios";
export default {
  name: "Accueil",
  data() {
    return {
      isConnected: false,
      articles: {},
      commentaires: "",
      NavBar: false,
      drawer: false,
      menuItems: [
        { icon: "mdi-account", title: "Inscription", link: "/Signup" },
        { icon: "mdi-login", title: "Connexion", link: "/Login" },
        { icon: "mdi-notebook", title: "Nouvel Article", link: "/NewArticle" },
        { icon: "mdi-notebook", title: "Mes Articles", link: "/Articles" },
        { icon: "mdi-face-woman-profile", title: "Profil", link: "/Profile" },
        { icon: "mdi-logout", title: "Déconnexion", link: "/Logout" },
      ],
    };
  },
  mounted: function() {
    this.listAllUsersArticles();
    this.setIsConnected();
  },
  methods: {
    setIsConnected() {
      const userToken = localStorage.getItem("usertoken");
      if (userToken != undefined) {
        this.isConnected = true;
      } else {
        this.isConnected = false;
      }
    },
    listAllUsersArticles() {
      const token = localStorage.getItem("usertoken");
      Axios.get("http://localhost:3000/api/articles/All/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          this.articles = res.data.articles;
        })
        .catch((error) => console.log({ error }));
    },
  },
};
</script>

<style scoped>
.v-btn {
  font-size: 12px;
}
.container {
  width: 60%;
}
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
.flex {
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 10px;
}
h1 {
  color: #1a237e;
}
</style>
