<template>
  <v-card class="mx-auto ma-6" style="max-width: 500px;">
    <v-toolbar color="indigo darken-4" cards dark flat>
      <v-card-title class="title">
        <p class="card_subtitle" v-if="mode == 'login'">
          Tu n'as pas encore de compte ?
          <span class="card_action" @click="switchToCreateAccount()"
            >Créer un compte</span
          >
        </p>
        <p class="card_subtitle" v-else>
          Tu as déjà un compte ?
          <span class="card_action" @click="switchToLogin()">Se Connecter</span>
        </p>
      </v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field
        v-if="mode == 'create'"
        v-model="nom"
        filled
        color="indigo"
        label="Nom"
      ></v-text-field>
      <v-text-field
        v-if="mode == 'create'"
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
        @click="signin()"
        class="white--text"
        v-if="mode == 'login'"
        :disabled="!form"
        :loading="isLoading"
        color="indigo darken-4"
        depressed
      >
        Connexion
      </v-btn>
      <v-btn
        @click="createAccount()"
        v-else
        :disabled="!form"
        :loading="isLoading"
        color="indigo darken-4"
        depressed
      >
        Créer mon compte
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "signup",

  data: function() {
    return {
      mode: "login",
      prenom: "",
      nom: "",
      email: "",
      form: false,
      isLoading: false,
      password: "",
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
    switchToCreateAccount: function() {
      this.mode = "create";
    },
    switchToLogin: function() {
      this.mode = "login";
    },
    signin: function() {
      const self = this;
      this.$store
        .dispatch("signin", {
          email: this.email,
          password: this.password,
        })
        .then(
          function() {
            self.$router.push('/Profile');
          },
          function(error) {
            console.log(error);
          }
        );
    },
    createAccount: function() {
      this.$store
        .dispatch("signup", {
          email: this.email,
          nom: this.nom,
          prenom: this.prenom,
          password: this.password,
        })
        .then(function(response) {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.card_subtitle {
  font-size: 18px;
}
</style>
