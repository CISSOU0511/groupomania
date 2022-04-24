<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <v-layout row>
              <v-flex>
                <v-card
                  id="userArticle"
                  v-for="userArticle in userArticles"
                  :key="userArticle.id"
                >
                  <div
                    class="indigo darken-4 white--text width:20px"
                    :name="userArticle.id"
                  >
                    {{ userArticle.contenu }}
                  </div>
                  <div>
                    <v-img
                      style="max-width:100px;"
                      :src="userArticle.imageUrl"
                    />
                  </div>
                  <div class="btn">
                    <v-btn
                      class="indigo darken-4 white--text"
                      @click="goToUpdateArticle(userArticle.id)"
                    >
                      Modifier</v-btn
                    >
                    <v-btn
                      class="indigo darken-4 white--text"
                      @click="deleteArticle(userArticle.id)"
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
