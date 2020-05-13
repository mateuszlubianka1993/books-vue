<template>
  <div>
    <h3>Best Sellers lists
      <span class="small">{{bestSellers.bestsellers_date}}</span>
      <mdb-container fluid>
        <List v-for="(list, index) in bestSellers.lists" :key="index" :list="list" />
      </mdb-container>
    </h3>

  </div>
</template>

<script>
import List from './List';
import {mdbContainer} from 'mdbvue';

export default {
  name: 'BestsellersLists',
  data() {
    return {
      bestSellers: []
    }
  },
  components: {
    List,
    mdbContainer
  },
  methods: {
    getLists() {
      
      this.$http
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=iC5ZgYPG8g6NpG9VdPw0iI4XIC37fTGs`
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.bestSellers = data.results;
          console.log(this.bestSellers)
        });
    }
  },
  mounted: function() {
    this.getLists();
  }
}
</script>

<style scoped>

</style>
