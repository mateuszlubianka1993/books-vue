<template>
  <div class="mb-3" v-animateOnScroll="'fadeInRight'">
    <h4>{{quote.title}}</h4>
    <blockquote class="blockquote">
      <p class="mb-0">
        {{quote.quote}}
      </p>
      <footer class="blockquote-footer mb-3">
        {{quote.author}} 
      </footer>
    </blockquote>
  </div>
</template>

<script>
import { animateOnScroll } from "mdbvue";

export default {
  name: "Quote",
  directives: {
      animateOnScroll
  },
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    getQuote() {
      this.$http
        .get(`https://quotes.rest/qod.json?language=en`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.quote = data.contents.quotes[0];
        });
    },
  },
  mounted: function() {
    this.getQuote();
  },
};
</script>

<style scoped></style>
