<template>  
  <nav>
    <div class="left-nav">
      <ul>
        <li>
          <router-link to="/accueil">Accueil</router-link>
        </li>
      </ul>
    </div>
      <img src="../assets/images/icon-left-font-monochrome-white.svg" alt="logo"/>
    <div class="right-nav">
      <ul>
        <li>
          <router-link to="/Signup">Inscription</router-link>
        </li>
        <li>
          <a to="/Login" v-on:click="Logout()">Déconnexion</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'logo',
    props: ['logo']
  }
</script>


<style lang="scss">
// Palette de couleurs
$primary-blue: #122442;
$text-danger: #E53935;
$primary-grey: #E53935;
$secondary-grey: #E53935;
$primary-white: whitesmoke;
nav {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: thin solid darken($primary-blue, 5%);
  background-color: $primary-blue;
  .left-nav,
  .right-nav {
    align-self: center;
    width: 30%;
  }
  .right-nav {
    ul {
      justify-content: flex-end;
    }
  }
  .logo-responsive {
    display: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  li {
    margin: 0 15px;
  }
  a {
    color: white;
    font-weight: 400;
    font-size: 125%;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
// Responsive
@media screen and (max-width: 922px) {
  nav {
    flex-direction: column;
    .logo {
      display: none;
    }
    .logo-responsive {
      display: block;
      margin: auto;
      margin-bottom: 2%;
      border-bottom: 1px solid white;
    }
    .logo-image-responsive {
      svg {
        width: 250px;
        height: 60px;
      }
    }
    .left-nav,
    .right-nav {
      text-align: center;
      width: auto;
    }
    ul {
      display: inline-grid;
      letter-spacing: 0.75px;
      font-size: 125%;
      //text-transform: uppercase;
      font-weight: bold;
    }
    li {
      margin: 5% 0 5% 0;
    }
  }
}
</style>
