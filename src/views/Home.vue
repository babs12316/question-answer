<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Questions msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Questions from '@/components/Questions.vue'

export default {
  name: 'questions',
  components: {
    Questions
  }
}
</script>
