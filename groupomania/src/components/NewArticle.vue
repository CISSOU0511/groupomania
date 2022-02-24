<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">Nouvel Article</h5>
                    <div>{{ createAt }}</div>
                  </div>
                </v-card-title>
                <v-card class="mx-auto ma-6" style="max-width: 500px;">
                  <v-form
                    ref="formArticle"
                    v-model="form"
                    class="pa-4 pt-6"
                    style="width:500px"
                  >
                    <v-text-field
                      v-model="contenu"
                      filled
                      label="Contenu"
                    ></v-text-field>
                    <v-text-field
                      v-model="imageUrl"
                      filled
                      label="Image"
                    ></v-text-field>
                    <div class="mb-3 align-items-start">
                      <label
                        for="formFileSm"
                        class="form-label d-flex align-items-start"
                        >Ajoutez une image</label
                      >
                      <input
                        class="form-control form-control-sm"
                        type="file"
                        id="file"
                        ref="fileInput"
                      />
                    </div>
                  </v-form>
                </v-card>
              </v-flex>
            </v-layout>
            <div class="btn">
              <v-btn
                class="indigo darken-4 white--text"
                @click="createArticle()"
                >Ajouter un Article</v-btn
              >
              <v-btn
                class="indigo darken-4 white--text"
                @click="modifyArticle()"
                >Modifier</v-btn
              >
              <v-btn
                class="indigo darken-4 white--text"
                @click="deleteArticle()"
                >Supprimer</v-btn
              >
            </div>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  name: "NewArticle",
  props: ["articles"],
  data() {
    return {
      ArticleId: "",
      userId: "",
      imageUrl: "",
      createId: "",
      createAt: "",
      contenu: "",
      form: false,
    };
  },
  methods: {
    createArticle() {
      Axios.post("http://localhost:3000/api/articles", {
        contenu: this.contenu,
        userId: this.userId,
        imageUrl: this.imageUrl,
      })

        .then(function(response) {
          console.log(response);
        })
        .catch((error) => console.log({ error }));
    },
    modifyArticle() {
      Axios.put(
        "http://localhost:3000/api/articles/users/:id" + this.ArticleId,
        {
          userId: this.userId,
          contenu: this.contenu,
          imageUrl: this.imageUrl,
        }
      )
        .then(function(response) {
          console.log(response);
        })
        .catch((error) => console.log({ error }));
    },
    deleteArticle() {
      Axios.delete(
        "http://localhost:3000/api/articles/users/:id" + this.ArticleId,
        {
          contenu: this.contenu,
          userId: this.userId,
          imageUrl: this.imageUrl,
        }
      )
        .then(function(response) {
          console.log(response);
        })
        .catch((error) => console.log({ error }));
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
.btn {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
</style>
