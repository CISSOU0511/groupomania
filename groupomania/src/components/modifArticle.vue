<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <v-layout row>
              <v-flex>
                <v-card-title primary-title>
                  <div
                    id="userArticle"
                    v-for="articleUpd in articleToUpdate"
                    :key="articleUpd.id"
                  ></div>
                  <div>
                    <h4 class="white--text mb-0">Modifier un Article</h4>
                  </div>
                </v-card-title>
                <v-card class="mx-auto ma-6" style="max-width:1000px">
                  <v-form
                    v-for="articleUpd in articleToUpdate"
                    :key="articleUpd.id"
                    ref="contenu"
                    v-model="form"
                    class="pa-4 pt-6"
                    style="max-width:750px"
                  >
                    <v-text-field
                      v-model="contenu"
                      filled
                      :label="articleUpd.contenu"
                    ></v-text-field>
                    <v-img
                      style="max-width:100px"
                      :src="articleUpd.imageUrl"
                    ></v-img>
                  </v-form>
                  <div class="mb-3 align-items-start">
                    <label>
                      <input
                        class="form-control form-control-sm pa-4 pt-6"
                        type="file"
                        name="imageUrl"
                        ref="file"
                        @change="onFileSelected"
                      />
                    </label>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
            <div class="btn">
              <v-btn
                class="indigo darken-4 white--text"
                @click="modifyArticle()"
              >
                Modifier</v-btn
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
      articleUpd: "",
      articleToUpdate: {},
      selectedFile: null,
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("usertoken"),
      contenu: "",
      imageUrl: "",
      form: false,
    };
  },
  mounted: function() {
    this.getArticleToUpdate();
  },
  methods: {
    onFileSelected() {
      this.selectedFile = this.$refs.file.files[0];
    },
    getArticleToUpdate() {
      const token = localStorage.getItem("usertoken");
      const articleId = localStorage.getItem("articleId");
      Axios.get("http://localhost:3000/api/articles/" + articleId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data.article);
          this.articleToUpdate = res.data.article;
        })
        .catch((error) => console.log({ error }));
    },
    modifyArticle() {
      const articleId = localStorage.getItem("articleId");
      const token = localStorage.getItem("usertoken");
      const formData = new FormData();
      formData.set("contenu", this.contenu);
      formData.set("image", this.selectedFile);
      Axios.put("http://localhost:3000/api/articles/" + articleId, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          this.$router.push("/Articles");
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
