<template>
  <v-card class="mx-auto ma-6" color="indigo" dark style="max-width: 500px;">
    <v-toolbar flat color="indigo darken-4">
      <v-icon class="mr-3">mdi-account</v-icon>
      <v-toolbar-title>
        Connexion
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="indigo darken-4" fab small @click="isEditing = !isEditing">
        <v-icon v-if="isEditing">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text class="mx-auto ma-3">
      <v-text-field
        v-model="email"
        :disabled="!isEditing"
        color="white"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[rules.password, rules.length(6)]"
        :disabled="!isEditing"
        color="white"
        label="Password"
        type="Password"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="login()" :disabled="!isEditing" color="success">
        Connexion
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      hasSaved: false,
      isEditing: null,
      model: null,
      rules: {
        email: (v) =>
          !!(v || "").match(/@/) || "Veuillez saisir une adresse e-mail valide",
        length: (len) => (v) =>
          (v || "").length >= len ||
          `Longueur de caractère non valide, obligatoire ${len}`,
        password: (v) =>
          !!(v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Le mot de passe doit contenir une lettre majuscule, un caractère numérique et un caractère spécial",
        required: (v) => !!v || "Ce champ est requis",
      },
    };
  },
  methods: {
    login() {
      const self = this;
      Axios.post(
        "http://localhost:3000/api/login",
        {
          email: this.email,
          password: this.password,
        },
        {
          headers: { "Content-type": "application/json" },
        }
      )
        .then((res) => {
          localStorage.setItem("usertoken", res.data.token);
          localStorage.setItem("userId", res.data.id);
          console.log("Vous êtes bien connecté !");
          this.$router.push("/Accueil");
        })
        .catch((error) => console.log({ error }));
    },
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();
      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
</script>
