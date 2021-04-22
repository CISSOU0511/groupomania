<template>
  <nav>
    <v-app-bar flat app class="indigo darken-4">
      <v-app-bar-nav-icon class="white--text ml-3" @click.native="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-img
          style="max-width: 250px;"
          src="@/assets/images/icon-left-font-monochrome-white.svg"
          alt="logo"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/Articles" class="indigo darken-4 white--text mr-3"> Ajouter un Article </v-btn>
        <v-btn text to="/Comment" class="indigo darken-4 white--text"> Ajouter un Commentaire </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="pt-10 indigo darken-4">
      <v-list>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-action>
            <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>
            </v-list-item-action>
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
  data () {
    return {
      drawer: false,
      items: [
        { icon: "mdi-view-dashboard", title: "Articles" },
        { icon: "mdi-image", title: "Photos" },
        { icon: "mdi-comment", title: "Commentaires" },
      ]
    }
  }
};
</script>
