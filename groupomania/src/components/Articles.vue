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
                    <div>17 juillet 2021</div>
                  </div>
                </v-card-title>
                <v-card class="mx-auto ma-6" style="max-width: 500px;">
                  <v-form ref="formArticle" v-model="form" class="pa-4 pt-6">
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
                  </v-form>
                </v-card>
              </v-flex>
              <v-btn
                class="indigo darken-4 white--text" @click="modifyArticle()"
                >Modifier</v-btn
              >
              <v-btn
                class="indigo darken-4 white--text"
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

export default {
  name: "Articles",
  data() {
    return {
      userId: "",
      imageUrl: "",
      contenu: "",
      form: false,
    };
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
