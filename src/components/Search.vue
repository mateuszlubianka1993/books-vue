<template>
  <div>
    <form class="container mb-5" @submit.prevent="getBooks">
      <mdb-row>
        <mdb-col class="col-12">
            <mdb-input v-model="searched" type="text" placeholder="Search" aria-label="Search"/>
        </mdb-col>
        <mdb-col class="col-12 d-flex align-items-center">
          <mdb-btn block type="submit" size="sm" color="indigo">Search</mdb-btn>
        </mdb-col>
      </mdb-row>
    </form>
    <div class="container">
      <mdb-row>
        <BookItem v-for="(book, index) in books" class="col-12 col-md-4 col-lg-3 mb-5" :key="index" :book="book"></BookItem>
      </mdb-row>
    </div>
  </div>
</template>

<script>
  import BookItem from './BookItem';
  import { mdbInput, mdbRow, mdbCol, mdbBtn } from 'mdbvue';

  export default {
    name: 'Search',
    components: {
      mdbInput,
      mdbRow, 
      mdbCol,
      mdbBtn,
      BookItem
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
          this.searched = '';
        });
      }
    }
  }
</script>
