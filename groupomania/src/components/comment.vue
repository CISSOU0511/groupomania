<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="indigo darken-4">
          <v-container fluid>
            <v-layout row>
              <v-flex>
                <v-card
                  id="commentaire"
                  v-for="commentaire in commentaires"
                  :key="commentaire.id"
                >
                  <div
                    class="indigo darken-4 white--text width:20px"
                    :name="commentaire.id"
                  >
                    {{ commentaire.commentaire }}
                  </div>
                  <div class="btn">
                    <v-btn
                      class="indigo darken-4 white--text"
                      @click="goToUpdateComment(commentaire.id)"
                    >
                      Modifier</v-btn
                    >
                    <v-btn
                      class="indigo darken-4 white--text"
                      @click="deleteComment(commentaire.id)"
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