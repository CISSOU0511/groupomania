<template>
  <v-card class="mx-auto ma-6" style="max-width: 500px;">
    <v-toolbar color="indigo darken-4" cards dark flat>
      <v-card-title class="title">
        <p class="card_subtitle">
          Tu n'as pas encore de compte ?
        </p>
      </v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field
        v-model="nom"
        filled
        color="indigo"
        label="Nom"
      ></v-text-field>
      <v-text-field
        v-model="prenom"
        filled
        color="indigo"
        label="Prénom"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="[rules.email]"
        filled
        color="indigo"
        label="Email"
        type="email"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="[rules.password, rules.length(6)]"
        filled
        color="indigo"
        counter="9"
        label="Mot de passe"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        class="indigo darken-4 white--text"
        text
        @click="$refs.form.reset()"
      >
        Annuler
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        :disabled="!form"
        :loading="isLoading"
        color="indigo darken-4"
        class="white--text"
        depressed
        @click="createAccount()"
      >
        Créer mon compte
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      mode: "",
      prenom: "",
      nom: "",
      email: "",
      password: "",
      form: false,
      isLoading: false,

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
    createAccount() {
      const self = this;
      Axios.post("http://localhost:3000/api/signup", {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
      })
        .then(function(response) {
          console.log(response);
          self.$router.push("/Login");
        })
        .catch((error) => console.log({ error }));
    },
  },
};
</script>

<style scoped>
.card_subtitle {
  font-size: 16px;
}
</style>
