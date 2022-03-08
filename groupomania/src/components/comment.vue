<template>
  <div class="comment">
    <div id="comment">
      <div class="btn">
        <v-btn to="/CreateComment" class="indigo darken-4 white--text" @click="createComment()"
          >Nouveau commentaire</v-btn
        >
        <v-btn class="indigo darken-4 white--text">Modifier</v-btn>
        <v-btn class="indigo darken-4 white--text">Supprimer</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "comment",
  data() {
    return {
      commentaire: "",
      postId: "",
      ArticleId: "",
      userId: "",
    };
  },
  methods: {
    createComment() {
      
      Axios.post("http://localhost:3000/api/comment", {
        commentaire: this.commentaire,
        postId: this.postId,
        ArticleId: this.ArticleId,
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
<style scoped>
#comment {
  display: block;
  padding-top: 10px;
}
.btn {
  display: flex;
  justify-content: space-around;
}
</style>