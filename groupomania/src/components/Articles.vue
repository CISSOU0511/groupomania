<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm8 md9>
                <v-card
                  id="userArticle"
                  v-for="userArticle in userArticles"
                  :key="userArticle.id"
                >
                  <div class="indigo darken-4 white--text">
                    {{ userArticle.contenu }}
                  </div>
                  <div>
                    <v-img :src="userArticle.imageUrl" />
                  </div>
                  <v-btn
                    class="indigo darken-4 white--text"
                    @click="modifyArticle()"
                  >
                    Modifier</v-btn
                  >
                </v-card>
              </v-flex>
              <div class="btn">
                <v-btn
                  class="indigo darken-4 white--text"
                  @click="modifyArticle()"
                >
                  Modifier</v-btn
                >
                <v-btn
                  class="indigo darken-4 white--text"
                  @click="deleteArticle()"
                  >Supprimer</v-btn
                >
              </div>
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
  name: "Articles",
  data() {
    return {
      userArticle: "",
      userArticles: {},
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("usertoken"),
      form: false,
    };
  },
  mounted: function() {
    this.listUserArticles();
  },
  methods: {
    onFileSelected() {
      this.selectedFile = this.$refs.file.files[0];
    },
    modifyArticle() {
      const token = localStorage.getItem("usertoken");
      const userId = parseInt(localStorage.getItem("userId"));
      const formData = new FormData();
      formData.set("userId", userId);
      formData.set("contenu", this.contenu);
      formData.set("image", this.selectedFile);
      Axios.put("http://localhost:3000/api/articles/:id", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.$router.push("/Accueil");
        })
        .catch((error) => console.log({ error }));
    },
    listUserArticles() {
      const token = localStorage.getItem("usertoken");
      const userId = parseInt(localStorage.getItem("userId"));
      Axios.get("http://localhost:3000/api/articles/user/" + userId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data.userArticles);
          this.userArticles = res.data.userArticles;
        })
        .catch((error) => console.log({ error }));
    },
    /*deleteArticle() {
      const token = localStorage.getItem("usertoken");
      Axios.delete("http://localhost:3000/api/articles/:id", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        articleId: this.articleId,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log({ error }));
    },*/
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
.btn {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
</style>
