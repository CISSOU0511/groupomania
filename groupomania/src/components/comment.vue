<template>
  <div class="comment">
    <div id="comment">
      <div class="contentComment flex-grow-1">{{ commentaire }}</div>
      <v-card-actions>
        <v-textarea class="pt-12">
          <div class="contentComment flex-grow-1">
            {{ commentaire }}
          </div>
        </v-textarea>
      </v-card-actions>
      <v-btn to="/Post" class="indigo darken-4 white--text"
        >Ajouter un commentaire</v-btn
      >
      <v-btn class="indigo darken-4 white--text" @click="updateComment()"
        >Modifier</v-btn
      >
      <v-btn class="indigo darken-4 white--text" @click="deleteComment()"
        >Supprimer</v-btn
      >
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  props: {
    commentaire: String,
    articleId: Number,
    createAt: String,
    commentaireId: Number,
  },
  methods: {
    updateComment: function() {
      Axios.put(
        "http://localhost:3000/api/comment/:id" + this.commentaireId,
        {}
      )
        .then(() => {
          console.log("commentaire modifié");
        })
        .catch((error) => {
          console.log("impossible de modifier ce commentaire");
          console.log(error.response.data.msg);
        });
    },
    findOneComment: function() {
      Axios.get(
        "http://localhost:3000/api/comment/:id" + this.commentaireId,
        {}
      )
        .then(() => {
          console.log("commentaire modifié");
        })
        .catch((error) => {
          console.log("impossible de modifier ce commentaire");
          console.log(error.response.data.msg);
        });
    },
    findAllComment: function() {
      Axios.get("http://localhost:3000/api/comment/" + this.commentaireId, {})
        .then(() => {
          console.log("commentaire modifié");
        })
        .catch((error) => {
          console.log("impossible de modifier ce commentaire");
          console.log(error.response.data.msg);
        });
    },
    deleteComment: function() {
      Axios.delete("http://localhost:3000/api/comment/" + this.commentaireId)
        .then(() => {
          console.log("commentaire supprimé");
        })
        .catch((error) => {
          console.log("impossible de supprimer ce commentaire");
          console.log(error.response.data.msg);
        });
    },
  },
};
</script>
