<template>
  <div>
    <h3>Best Sellers lists
      <span class="small">{{bestSellers.bestsellers_date}}</span>
    </h3>

  </div>
</template>

<script>

export default {
  name: 'BestsellersLists',
  data() {
    return {
      bestSellers: []
    }
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
