<template>
   <v-app>
    <v-main>
       <Navbar/>
       <router-view></router-view>
       <Footer/>
    </v-main>
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
</script>
