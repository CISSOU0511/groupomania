<template>
  <v-card class="mx-auto ma-6" color="indigo" dark style="max-width: 500px;">
    <v-toolbar flat color="indigo darken-4">
      <v-icon class="mr-3">mdi-account</v-icon>
      <v-toolbar-title>
        Mon Profil
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
        :disabled="!isEditing"
        color="white"
        label="Email"
      ></v-text-field>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        item-text="name"
        label="Password"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!isEditing" color="success" @click="save">
        Connexion
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
    };
  },
  methods: {
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