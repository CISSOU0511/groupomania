<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm8 md9>
                <v-card-title primary-title>
                  <div
                    id="user"
                    v-for="user in user"
                    :key="user.id"
                  ></div>
                  <div>
                    <h4 class="white--text mb-0">Nouvel Article</h4>
                    <div class="white--text mb-0">
                      <p>{{ user[0].prenom }} {{ user[0].nom }}</p>
                    </div>
                  </div>
                </v-card-title>
                <v-card class="mx-auto ma-6" style="max-width:500px">
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
                    <div class="mb-3 align-items-start">
                      <label>
                        <input
                          class="form-control form-control-sm"
                          type="file"
                          name="imageUrl"
                          ref="file"
                          @change="onFileSelected"
                        />
                      </label>
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
  data() {
    return {
      id: "",
      user: {},
      selectedFile: null,
      userId: "",
      contenu: "",
      imageUrl: "",
      form: false,
    };
  },
  /*props: {
    prenom: String,
    nom: String,
  },*/
  mounted: function (){
    this.getUserInfos();
  },
  methods: {
    onFileSelected() {
      this.selectedFile = this.$refs.file.files[0];
    },
    createArticle() {
      const self = this;
      const token = localStorage.getItem("usertoken");
      const userId = parseInt(localStorage.getItem("userId"));
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("contenu", this.contenu);
      formData.append("image", this.selectedFile);
      Axios.post("http://localhost:3000/api/articles/Create", formData, {
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
    getUserInfos() {
      const token = localStorage.getItem("usertoken");
      const userId = parseInt(localStorage.getItem("userId"));
      Axios.get("http://localhost:3000/api/" + userId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data.user);
          this.user = res.data.user;
        })
        .catch((error) => console.log({ error }));
    },
    /*modifyArticle() {
      const articleId = localStorage.getItem("articleId");
      const token = localStorage.getItem("usertoken");
      const userId = parseInt(localStorage.getItem("userId"));
      const formData = new FormData();
      formData.set("articleId", articleId);
      console.log(articleId);
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
    },*/
    /*deleteArticle() {
      Axios.delete("http://localhost:3000/api/articles/:id", {
        articleId: this.articleId,
      })
        .then(function(response) {
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
.btn {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
</style>
