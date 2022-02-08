<template>
  <v-app>
    <NavBar></NavBar>  
    <v-main>
      <router-view>
      </router-view>      
    </v-main>
    <div id="Footer">
    <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { 
    NavBar,
    Footer,
    },
  data() {
    return {};
  },
};
</script>