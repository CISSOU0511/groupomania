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
                    <h5 class="white--text mb-0">Nouveau Commentaire</h5>
                  </div>
                </v-card-title>
                <v-card class="mx-auto ma-6" style="max-width: 500px;">
                  <v-form>
                    <label>
                      <v-text-field
                        ref="commentaire"
                        v-model="commentaire"
                        filled
                        label="Commentaire"
                      ></v-text-field>
                    </label>
                  </v-form>
                </v-card>
              </v-flex>
            </v-layout>
            <div class="btn">
              <v-btn
                class="indigo darken-4 white--text"
                @click="createComment()"
                >Ajouter un Commentaire</v-btn
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
  name: "CreateComment",

  data() {
    return {
      commentaire:"",
      userId: "",
      articleId: "",
      form: false,
    };
  },
  methods: {
    createComment() {
      const self = this;
      const token = localStorage.getItem("usertoken");
      const userId = parseInt(localStorage.getItem("userId"));
      const articleId = localStorage.getItem("articleId");
      const formData = new FormData();
      formData.append("articleId", articleId);
      formData.append("userId", userId);
      formData.append("commentaire", this.commentaire);
      Axios.post("http://localhost:3000/api/comment/Create", formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          console.log(res);
          this.$router.push("/Accueil");
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
