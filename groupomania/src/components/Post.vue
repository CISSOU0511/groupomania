<template>
  <div class="Post">
    <div id="Post">
      <div to="/Post" class="userPost">{{ userNom }} {{ userPrenom }}</div>
      <v-card-title>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-btn to="/Articles" class="mr-5 indigo darken-4 white--text"> Ajouter un Article </v-btn>
      <v-btn class="indigo darken-4 white--text"> Ajouter une photo </v-btn>
      </v-form> 
      </v-card-title>  
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
    props: {
        commentaire: String,
        userNom: String,
        userPrenom: String,
    },  
};
</script>