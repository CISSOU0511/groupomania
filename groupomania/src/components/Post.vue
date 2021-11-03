<template>
  <div class="Post">
    <div id="Post">
      <v-textarea class="pt-12">
        <h3>{{ commentaire }}</h3>
        <v-btn color="success" @click="createComment()">Enregistrer</v-btn>
      </v-textarea>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  props: {
    commentaire: String,
    userId: Number,
    ArticleId: String,
    creationDate: Number,
  },
  methods: {
    createComment: function() {
      Axios.post("http://localhost:3000/api/comment/" + this.commentaireId, {})
      .then(() => {
        console.log("commentaire créé");
      })
      .catch((error) => {
        console.log("impossible d'ajouter ce commentaire");
      });
    }
  }
};  
</script>
