<template>
  <div class="profile">
    <v-main>
      <div id="profile" v-for="user in profile" :key="user.userId"></div>
      <h2>
        Bonjour <span>{{ user.prenom }}</span> ravi de vous revoir !
      </h2>
      <v-btn @click="toggleModale" class="mt-5 indigo darken-4 white--text"
        >Supprimer mon compte</v-btn
      >
      <div
        id="modal-confirmation"
        v-if="showModal === true"
        @close="toggleModale"
      >
        <h4 id="confirm-delete">
          Etes vous sûr de vouloir supprimer votre compte ?
        </h4>
        <v-btn class="button" id="confirm" @click="deleteAccount()">OUI</v-btn>
        <v-btn class="button" id="cancel" @click="toggleModale">NON</v-btn>
      </div>
    </v-main>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Profile",
  props: ["userId", 'token'],
  data() {
    return {
      profile: "",
      showModal: false,
    };
  },

  methods: {
    toggleModale() {
      this.showModal = !this.showModal;
    },
    deleteAccount() {
      Axios.delete("http://localhost:3000/api/user/" + this.userId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      }).then(() => {
        console.log("Profil supprimé");
        sessionStorage.clear();
        this.$router.push("/Login");
      });
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button {
  width: 100px;
  border: 1px outset;
  background-color: #1a237e;
  border-radius: 10px;
  padding: 2.7%;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
}
#confirm,
#cancel {
  background-color: #1a237e;
  color: white;
}
#confirm-delete {
  padding-top: 20px;
  padding-bottom: 20px;
}
.form-row {
  padding-top: 20px;
}
</style>
