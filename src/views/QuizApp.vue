<template>
    <div id="app">
      <Quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
      <QuizFinish
        v-show="showResult"
        header="Congratulations!"
        subheader="You've completed your Quiz!"
        v-bind:quizScore="quizScore"
        @reload="updateQuiz"
        @close="showModal = false"
      />
    
    </div>
  </template>
  
  <script>
  import Quiz from "@/components/QuizOverlay.vue";
  import QuizFinish from "@/components/QuizFinish.vue";
  export default {
    name: "App",
    components: {
      Quiz,
      QuizFinish,
    },
    data() {
      return {
        quizKey: 0,
        showResult: false,
        quizScore: {
          allQuestions: 0,
          answeredQuestions: 0,
          correctlyAnsweredQuestions: 0,
        },
      };
    },
    methods: {
      handleQuizCompleted(score) {
        this.quizScore = score;
        this.showResult = true;
      },
      updateQuiz() {
        this.showResult = false;
        this.quizKey++;
      },
    },
  };
  </script>
  
  <style>
  * {
    box-sizing: border-box;
    margin: 0;
  }
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  footer {
    position: fixed;
    bottom: 0;
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 0.7rem;
    background-color:#ececec;
    overflow-y: hidden;
  }
  #createdBy {
    float: left;
    position: relative;
    left: 45%;
    bottom:0;
    font-size: 18px;
  }
  </style>
