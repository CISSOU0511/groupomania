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
          <v-icon>mdi-account</v-icon>Inscription
        </v-btn>
        <v-btn to="/Home" class="mr-5 indigo darken-4 white--text">
          <v-icon>mdi-login</v-icon>Connexion
        </v-btn>
        <v-btn to="/About" class="mr-5 indigo darken-4 white--text">
          <v-icon>mdi-face</v-icon>Profil
        </v-btn>
        <v-btn to="/Articles" class="mr-5 indigo darken-4 white--text">
          <v-icon>mdi-notebook</v-icon>Articles
        </v-btn>
        <v-btn to="/comment" class="mr-5 indigo darken-4 white--text">
          <v-icon>mdi-comment</v-icon>Commentaires
        </v-btn>
    </v-app-bar>
         <v-container class="container">
           <div>
           <v-img style="max-width: 500px;" src="@/assets/images/groupomania.png"></v-img>
           <p class="indigo darken-4 white--text">Bienvenue sur GROUPOMANIA</p>
           </div>   
          </v-container>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      app
      class="pt-10 indigo darken-4"
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
        >
          <v-list-item-action>
            <v-list-item-icon>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text"
              >{{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Accueil",
  component: {
    Post,
  },
  data() {
    return {
      NavBar: false,
      drawer: false,
      menuItems: [
        { icon: "mdi-account", title: "Inscription", link: "/Signup"},
        { icon: "mdi-login", title: "Connexion", link: "/Home"},
        { icon: "mdi-face", title:"Profil", link:"/About"},
        { icon: "mdi-notebook", title: "Articles", link: "/Articles" },
        { icon: "mdi-comment", title: "Commentaires", link: "/Commentaires" },              
      ],
    };
  },
};
</script>

<style scoped>
  .container{
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
