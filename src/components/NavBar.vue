<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Cedric </span>
        <span>Adap</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          OTHER VUES
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-home', path: '/' },
           { title: 'About Me', icon: 'mdi-account', path: '/aboutMe' },
           { title: 'Programming Skills', icon: 'mdi-laptop', path: '/programmingSkills' },
           { title: 'About IT', icon: 'mdi-desktop-tower', path: '/aboutIt' },
           { title: 'About T.I.P', icon: 'mdi-school', path: '/aboutTip' },
           { title: 'Calculator', icon: 'mdi-calculator', path: '/basicMath' },
           { title: 'String Manipulator', icon: 'mdi-code-string', path: '/stringApp'},
           { title: 'Steam Charts', icon: 'mdi-chart-areaspline', path: '/axiosAPI'},
           { title: 'Quiz Game', icon: 'mdi-gamepad', path: '/quizApp'},
           { title: 'Anime Tracker', icon: 'mdi-library', path: '/animeTracker'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>