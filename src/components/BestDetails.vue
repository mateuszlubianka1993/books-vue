<template>
  <mdbContainer class="p-2 animated fadeIn">
    <mdbRow>
      <mdb-col class="col-12">
        <div class="p-2 mb-3 mt-2 title-container">
          <h2 class="text-left font-italic">{{ title }}</h2>
        </div>
      </mdb-col>
      <mdb-col class="col-lg-10">
        <mdbRow>
          <mdb-col class="col-8 col-sm-6 mb-3">
            <img :src="image" class="img-fluid mb-sm-3 mb-0 pr-5"> 
          </mdb-col>
          <mdb-col class="col-12 col-sm-6 text-left mb-3">
            <h4>{{ author }}</h4>
            <p class="green-text font-weight-bold">Rank: {{ rank }}</p>
            <p class="font-weight-bold">Weeks on list: {{ weeks }}</p> 
            <p class="font-weight-bold">Description</p>
            <p class="font-italic">{{ description }}</p>
          </mdb-col>
        </mdbRow>
      </mdb-col>
    </mdbRow>
    
  </mdbContainer>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';

export default {
  name: "BestDetils",
  data() {
    return {
      title: this.$route.query.title,
      author: this.$route.query.author,
      image: this.$route.query.image,
      description: this.$route.query.description,
      rank: this.$route.query.rank,
      weeks: this.$route.query.weeks,
    };
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
.title-container {
  border-bottom: 2px solid #2c3e50;
}
</style>
