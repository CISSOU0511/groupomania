<template>
  <v-footer
    color="indigo darken-4"
    padless
  >
      <v-col
        class="indigo darken-4 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Groupomania</strong>
      </v-col>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>