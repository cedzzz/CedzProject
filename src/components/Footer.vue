<template>
<footer>
    <p id="createdBy" class="font-weight-light">
      Created By: Cedric Adap
     <span class="font-weight-bold" style="font-size:30px;"></span>
     &nbsp;&nbsp;
     <a href="https://facebook.com/cedzzz.a" style = "text-decoration: none; color: inherit;"><font-awesome-icon icon="fa-brands fa-facebook" size="1x" /></a>
     &nbsp;
     <a href="https://discordapp.com/users/209205656366874624"  style = "text-decoration: none; color: inherit;" ><font-awesome-icon icon="fa-brands fa-discord" size="1x" /></a>
    </p>
</footer>
</template>
<script setup>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faFacebook } from '@fortawesome/free-brands-svg-icons'
  import { faDiscord } from '@fortawesome/free-brands-svg-icons'
  library.add(faFacebook, faDiscord)
</script>