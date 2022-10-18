<template>
    <v-container class=".bg-primary" fluid>
      <font-awesome-icon icon="fa-brands fa-steam" size="2x" />&nbsp;<span class="font-weight-bold" style="font-size:30px;">STEAM CHARTS</span>
    <v-card class="ma-1"
    width = "1000"
    color="info"
    shaped>
    <v-card-title style = "background-color: #45b1e8;"> <font-awesome-icon icon="fa-brands fa-steam" size="1x" />&nbsp; TOP GAMES IN STEAM</v-card-title>
      

    <v-list-item
          v-for="game in gameData "
          :key="game.id"
        >
          <v-list-item-title><h2><mark style="background: #FFD580">{{game.rank + '.'}}&nbsp;{{game.name}}</mark></h2></v-list-item-title>
          <v-list-item>
          <p><strong>Current Players: </strong>{{game.currentPlayers}}</p>
          <p><strong>Peak Players: </strong>{{game.peakPlayers}}</p>
          <p><strong>Total Amount of Hours Played Worldwide: </strong>{{game.hoursPlayed}} </p>
           </v-list-item>        
          
    </v-list-item>
    </v-card>
    </v-container>
    </template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import { ref, onMounted } from 'vue';
import axios from 'axios'
library.add(faSteam);


const gameData = ref([]);

async function getFreeGames () {
  axios.request ({
    method: 'GET',
  url: 'https://steamcharts.p.rapidapi.com/api/v1/games/tops',
  headers: {
    'X-RapidAPI-Key': '0712eadcc9msh5b097d1d3b2360ep19e27ajsnd688ae1cd6ab',
    'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
  }
  })
  .then ( response => {
    gameData.value=(response.data)
    console.log(gameData.value)
  })
  .catch(err => {
					console.error(err);
				})
}

onMounted( async () => {
       await getFreeGames()
   })
</script>
<style>
.item + .item:before {
  content: ", ";
}
</style>