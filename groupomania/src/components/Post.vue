<template>
    <div id="Post">
      <v-textarea class="pt-12"> </v-textarea>
      <v-btn color="success" @click="createComment()">Enregistrer</v-btn>
      <v-btn class="indigo darken-4 white--text">Modifier</v-btn>
      <v-btn class="indigo darken-4 white--text">Supprimer</v-btn>
    </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Post",
  data() {
    return {
      commentaire: "",
      postId: "",
      articleId: "",
      userId: 1,
    };
  },
  methods: {
    createComment() {
      
      Axios.post("http://localhost:3000/api/comment", {
        commentaire: this.commentaire,
        postId: this.postId,
        articleId: this.articleId,
        userId: this.userId,
      })
        .then(function(response) {
          console.log(response);
        })
        .catch((error) => console.log({ error }));
    },
  },
  
};
</script>
