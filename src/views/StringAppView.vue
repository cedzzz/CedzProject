<template>
<v-container fluid>
     &nbsp&nbsp&nbsp<span class="font-weight-bold" style="font-size:30px;text-decoration: underline;"> STRING MANIPULATOR&nbsp&nbsp</span>
 <v-card
    class="ma-15"
    max-width="544"
    color="secondary"
 >
  <v-card-title style="background-color: #28a99e"> Vowel Count </v-card-title>

   <v-text-field label="Enter a text" v-model="vowelInput"></v-text-field>

   <v-card-actions  >
   <v-btn style = "background-color: #008080;margin:auto;display:block;" @click="doCountVowel" >
        Count Vowel
   </v-btn>
   </v-card-actions>
   <br>
   <br>

   &nbsp&nbsp&nbsp&nbsp<v-text><strong>VOWEL COUNT:  </strong> {{vowelCount}}</v-text>
 </v-card> 


 <v-card
    class="ma-15"
    max-width="544"
    color="info"
 >
  <v-card-title style = "background-color: #45b1e8;"> Capitalization of Letters </v-card-title>

   <v-text-field label="Enter a text" v-model="capitalInput"></v-text-field>

   <v-card-actions  >
   <v-btn style = "background-color: #1266F1;margin:auto;display:block;" @click="doUpperCase" >
        Capitalize Text
   </v-btn>
   </v-card-actions>
   <br>
   <br>

   &nbsp&nbsp&nbsp&nbsp<v-text><strong>Capitalized Output: </strong>  {{capitalResult}} </v-text>
 </v-card> 


 <v-card
    class="ma-15"
    max-width="544"
    color="warning"
 >
  <v-card-title style="background-color: #fa8128;"> Vowel Conversion </v-card-title>

   <v-text-field label="Enter a text" v-model="vowelConvert"></v-text-field>

   <v-card-actions  >
   <v-btn style = "background-color: #b2560d;margin:auto;display:block;" @click="doConvertVowel" >
        CONVERT TEXT'S VOWEL
   </v-btn>
   </v-card-actions>
   <br>
   <br>

   &nbsp&nbsp&nbsp&nbsp<v-text><strong>Output:  </strong> {{convertResult}}</v-text>
 </v-card> 


 <v-card
    class="ma-15"
    max-width="544"
    color="success"
 >
  <v-card-title style="background-color: #009200;"> Consonant Capitalization </v-card-title>

   <v-text-field label="Enter a text" v-model="consonantInput"></v-text-field>

   <v-card-actions  >
   <v-btn style = "background-color: #006100;margin:auto;display:block;" @click="doUpperConsonant" >
        CONVERT TEXT
   </v-btn>
   </v-card-actions>
   <br>
   <br>

   &nbsp&nbsp&nbsp&nbsp<v-text><strong>Capitalized Output: </strong> {{consonantResult}} </v-text>
 </v-card> 

</v-container>
</template>

<script setup>
import {ref} from 'vue'

const vowelInput = ref('')
const vowelCount = ref(0)

const capitalInput = ref('')
const capitalResult = ref('')

const vowelConvert = ref('')
const convertResult = ref('')

const consonantInput = ref('')
const consonantResult = ref('')

function doUpperCase () {
     capitalResult.value = capitalInput.value.toUpperCase();
     return capitalResult.value; 
}

function doCountVowel () {
     vowelCount.value = vowelInput.value.match(/[aeiou]/gi).length;
     return vowelCount.value; 
}


function doConvertVowel () {
     convertResult.value = vowelConvert.value.replace(/[aeiou]/gi, "*");
     return convertResult.value; 
}
function doUpperConsonant () {
     consonantResult.value = consonantInput.value.replace(/([bcdfghjklmnpqrstvwxyz])/gi, function (match) { 
          match = match.toUpperCase(); return match; 
     });
     return consonantResult.value; 
}
</script>
