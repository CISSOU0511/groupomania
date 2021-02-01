<template>
  <v-card class="overflow-hidden" color="purple lighten-1" dark>
    <v-toolbar flat color="purple">
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Name"
      ></v-text-field>
      <v-autocomplete
        :disabled="!isEditing"
        :items="states"
        :filter="customFilter"
        color="white"
        item-text="name"
        label="State"
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!isEditing" color="success" @click="save">
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
      Your profile has been updated
    </v-snackbar>
  </v-card>
</template>
