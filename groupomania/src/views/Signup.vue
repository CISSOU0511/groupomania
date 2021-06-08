<template>
  <v-card class="mx-auto ma-6" style="max-width: 500px;">
    <v-toolbar color="indigo darken-4" cards dark flat>
      <v-card-title class="title">
        <v-icon class="mr-3">mdi-account</v-icon>
        Inscription
      </v-card-title>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-4 pt-6">
      <v-text-field
        v-model="lastName"
        filled
        color="indigo"
        label="Nom"
      ></v-text-field>
      <v-text-field
        v-model="firstName"
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
        class="white--text"
        color="indigo darken-4"
        depressed
      >
        Envoyer
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "signup",
  data: () => ({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
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
  }),
};
</script>
