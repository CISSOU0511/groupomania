<template>
  <div class="Post">
    <div id="Post">
      <div to="/Post" class="userPost">{{ userNom }} {{ userPrenom }}</div>
      <v-card-title>
      <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-btn to="/Articles" class="mr-5 indigo darken-4 white--text"><v-icon>mdi-notebook</v-icon> Ajouter un Article </v-btn>
      <v-btn class="indigo darken-4 white--text"><v-icon>mdi-camera</v-icon> Ajouter une photo </v-btn>
      </v-form> 
      </v-card-title>  
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    props: {
        article: String,
        userNom: String,
        userPrenom: String,
    },
    created(){
      axios.post('http://localhost:3000/api/articles')
    }  
};
</script>