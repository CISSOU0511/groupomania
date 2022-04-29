<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <h2
              v-if="isAdmin == false"
              class="indigo darken-4 white--text pb-6 d-flex justify-center"
            >
              MES ARTICLES
            </h2>
            <h2
              v-if="isAdmin == true"
              class="indigo darken-4 white--text pb-6 d-flex justify-center"
            >
              Articles Utilisateurs
            </h2>
            <v-layout row>
              <v-flex>
                <v-card
                  id="article"
                  v-for="article in articles"
                  :key="article.id"
                >
                  <div
                    class="indigo darken-4 white--text pt-1 pb-1"
                    :name="article.id"
                  >
                    <h4 class="pl-3 pb-2">
                      {{ article.contenu }}
                    </h4>
                  </div>
                  <div class="d-flex justify-center pt-5">
                    <v-img style="max-width:150px;" :src="article.imageUrl" />
                  </div>
                  <div class="btn">
                    <v-btn
                      class="indigo darken-4 white--text"
                      @click="goToUpdateArticle(article.id)"
                    >
                      Modifier</v-btn
                    >
                    <v-btn
                      class="indigo darken-4 white--text"
                      @click="deleteArticle(article.id)"
                      >Supprimer</v-btn
                    >
                  </div>
                </v-card>
              </v-flex>
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
      isAdmin: false,
      articles: {},
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("usertoken"),
      form: false,
    };
  },
  mounted: function() {
    this.setIsAdmin();
    this.listArticles();
  },
  methods: {
    onFileSelected() {
      this.selectedFile = this.$refs.file.fileS[0];
    },
    setIsConnected() {
      const userToken = localStorage.getItem("usertoken");
      if (userToken != undefined) {
        this.isConnected = true;
      } else {
        this.isConnected = false;
      }
    },
    listArticles() {
      const token = localStorage.getItem("usertoken");
      const userId = parseInt(localStorage.getItem("userId"));
      const admin = this.isAdmin;
      var url = "";

      if (admin) {
        url = "http://localhost:3000/api/articles/All/";
      } else {
        url = "http://localhost:3000/api/articles/user/" + userId;
      }
      Axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if(admin) {
            this.articles = res.data.articles;
          } else {
            this.articles = res.data.userArticles;
          }
        })
        .catch((error) => console.log({ error }));
    },
    setIsAdmin() {
      const role = localStorage.getItem("role");
      if (role == 2) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    },
    goToUpdateArticle(articleId) {
      localStorage.setItem("articleId", articleId);
      this.$router.push("/modifArticle");
    },
    deleteArticle(articleId) {
      const token = localStorage.getItem("usertoken");
      Axios.delete("http://localhost:3000/api/articles/article/" + articleId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
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
.white {
  max-width: 100%;
}
.btn {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
