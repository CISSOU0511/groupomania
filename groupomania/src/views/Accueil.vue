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
            style="max-width: 250px;"
            src="@/assets/images/icon-left-font-monochrome-white.svg"
            alt="logo"
          ></v-img>
     </router-link>         
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn to="/Post" class="mr-5 indigo darken-4 white--text">
          Ajouter un Post
        </v-btn>
  
    </v-app-bar>

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
          router
          :to="item.link"
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
        { icon: "mdi-view-dashboard", title: "Articles", link: "/Articles" },
        { icon: "mdi-image", title: "Photos", link: "/Photos" },
        { icon: "mdi-comment", title: "Commentaires", link: "/Commentaires" },
      ],
    };
  },
};
</script>
