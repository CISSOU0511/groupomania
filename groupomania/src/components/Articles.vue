<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm4 md3>
                <v-card-actions>
                  <v-img
                    style="cursor: pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Eiffel_trocadero_i.jpg/240px-Eiffel_trocadero_i.jpg"
                    height="150px"
                  ></v-img>
                </v-card-actions>
              </v-flex>
              <v-flex xs12 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">Mon Article</h5>
                    <div>17 juillet 2021</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-textarea class="white">
                    <div class="contentComment flex-grow-1">
                      {{ article }}
                    </div>
                  </v-textarea>
                </v-card-actions>
              </v-flex>
              <v-btn
                class="indigo darken-4 white--text"
                @click="createArticle()"
                >Ajouter un Article</v-btn
              >
              <v-btn
                class="indigo darken-4 white--text"
                @click="updateArticle()"
                >Modifier</v-btn
              >
              <v-btn
                class="indigo darken-4 white--text"
                @click="deleteArticle()"
                >Supprimer</v-btn
              >
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  props: {
    article: String,

    createAt: String,
    articleId: Number,
  },
  methods: {
    createArticle: function() {
      Axios.post("http://localhost:3000/api/article/" + this.articleId, {})
        .then(() => {
          console.log("article créé");
        })
        .catch((error) => {
          console.log("impossible d'ajouter cet article");
          console.log(error.response.data.msg);
        });
    },
    updateArticle: function() {
      Axios.put("http://localhost:3000/api/article/id" + this.articleId, {})
        .then(() => {
          console.log("article modifié");
        })
        .catch((error) => {
          console.log("impossible de modifier cet article");
          console.log(error.response.data.msg);
        });
    },
    deleteArticle: function() {
      Axios.delete("http://localhost:3000/api/article/" + this.articleId)
        .then(() => {
          console.log("article supprimé");
        })
        .catch((error) => {
          console.log("impossible de supprimer cet article");
          console.log(error.response.data.msg);
        });
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
.container {
  padding: 40px;
}
.white {
  max-width: 100%;
}
</style>
