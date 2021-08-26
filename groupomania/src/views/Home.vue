<template>
  <div class="card">
    <h1 class="card_title" v-if="mode == 'login'">Connexion</h1>
    <h1 class="card_title" v-else>Inscription</h1>
    <p class="card_subtitle" v-if="mode =='login'"> Tu n'as pas encore de compte ? <span class="card_action" @click="switchToCreateAccount()">Créer un compte</span></p>
    <p class="card_subtitle" v-else> Tu as déjà un compte ? <span class="card_action" @click="switchToLogin()">Se Connecter</span></p>
    <div class="form-row">
    <input v-model="email" class="form_row_input" type="text" placeholder="Adresse Email"/>
    </div>
    <div class="form-row" v-if= "mode == 'create'">
    <input v-model="nom" class="form_row_input" type="text" placeholder="Nom"/>
    <input v-model="prenom" class="form_row_input" type="text" placeholder="Prénom"/>
    </div>
    <div class="form-row">
    <input v-model="password" class="form_row_input" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row">
    <v-btn class="indigo darken-4 white--text button--disabled" v-if="mode == 'login'">
      Connexion
      </v-btn> 
    <v-btn @click="createAccount()" class="indigo darken-4 white--text"  v-else>
      Créer mon Compte
      </v-btn>
    </div>
  </div>
</template>

<script>
export default{
  name:"Home", 

  data: function (){
    return{
    mode: 'login',
    email: '',
    prenom: '',
    nom: '',
    password: '',
    }
  },

  methods: {
    switchToCreateAccount: function (){
      this.mode= 'create';
    },
    switchToLogin: function (){
      this.mode= 'login'; 
    },
    createAccount: function(){
      this.$store.dispatch('createAccount',{
        email: this.email,
        nom: this.nom,
        prenom: this.prenom,
        password: this.password,
      })
    }  
  }
}
</script>
<style scoped>
  .card{
    margin: 50px;
    padding-left: 20px;
    padding-bottom: 10px;
    max-width: 400px;
  }
  .form-row{
    display:flex;
    margin: 16px 0px;
    flex-wrap: wrap;
  }
  .form_row_input{
    padding: 8px;
    border: none;
    border-radius: 8px;
    background: #f2f2f2;
    font-weight: 500;
    font-size: 16px;
  }
  .card{
    background-color: aqua;
  }
  .card_action{
    text-decoration: underline;
    color: red;
  }
</style>

