<template>
  <div>
    <form class="container" @submit.prevent="getBooks">
      <mdb-row>
        <mdb-col class="col-10">
            <mdb-input v-model="searched" type="text" placeholder="Search" aria-label="Search"/>
        </mdb-col>
        <mdb-col class="col-2 d-flex align-items-center">
          <mdb-btn type="submit" size="sm" color="indigo">Indigo</mdb-btn>
        </mdb-col>
      </mdb-row>
    </form>
  </div>
</template>

<script>
  import { mdbInput, mdbRow, mdbCol, mdbBtn } from 'mdbvue';

  export default {
    name: 'Search',
    components: {
      mdbInput,
      mdbRow, 
      mdbCol,
      mdbBtn
    },
    data() {
      return {
        searched: '',
        books: []
      }
    },
    methods: {
      getBooks() {
        this.$http
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.searched}+intitle:${this.searched}`
        )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.books = data.items;
          console.log(this.books)
        });
      }
    }
  }
</script>
