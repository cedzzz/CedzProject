<template>
<v-container fluid>
  &nbsp&nbsp&nbsp<span class="font-weight-bold" style="font-size:30px;text-decoration: underline;"> BASIC MATH OPERATOR&nbsp&nbsp</span>
  <v-card class="ma-1"
    width = "1000"
    height = "400"
    color="light"
    shaped>
  <v-card-title></v-card-title>
  <v-text-field label="First Input" v-model.number="firstNum"></v-text-field>
  <v-text-field label="Second Input" v-model.number="secondNum"></v-text-field>

  <v-btn @click="doAdd">Add</v-btn>&nbsp&nbsp&nbsp&nbsp
  <v-btn @click="doSubtract">Subtract</v-btn>&nbsp&nbsp&nbsp&nbsp
  <v-btn @click="doMultiply">Multiply</v-btn>&nbsp&nbsp&nbsp&nbsp
  <v-btn @click="doDivide">Divide</v-btn>&nbsp&nbsp&nbsp&nbsp
  
  <br>
  <br>
  <v-text><strong>OUTPUT: </strong>{{result}}</v-text>
</v-card>
</v-container>
 </template>

<script setup>
  import {ref} from 'vue'

  const firstNum=ref(0)
  const secondNum=ref(0)
  const result=ref('')

  function doAdd(){
    result.value = firstNum.value + secondNum.value; 
    return  result.value;
  }
  function doSubtract(){
    result.value = firstNum.value - secondNum.value;
    return result.value;
  }
  function doMultiply(){
    result.value = firstNum.value * secondNum.value;
    return result.value;
  }
  function doDivide(){
    result.value = firstNum.value / secondNum.value;
    return result.value;
  }
</script>


