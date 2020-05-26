<template>
  <div class="list">
    <h5>List {{ list.display_name }}</h5>
    <mdbRow class="">
      <mdbCol :action="true" v-for="(book, index) in list.books" :key="index" class="item" v-animateOnScroll="'fadeInRight'">
        <router-link :to="{ path: '/book-details/' + book.title, query: {title: book.title, author: book.author, image: book.book_image, description: book.description, rank: book.rank, weeks: book.weeks_on_list }}">
          <mdb-card class="book-card mb-3">
            <mdb-card-image
              :src="book.book_image"
              alt="Card image cap"
              class="book-img"
            ></mdb-card-image>
            <mdb-card-body>
              <mdb-card-title class="book-title">{{
                book.title
              }}</mdb-card-title>
            </mdb-card-body>
          </mdb-card>
        </router-link>
      </mdbCol>
    </mdbRow>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  animateOnScroll
} from "mdbvue";

export default {
  name: "List",
  props: ["list"],
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
  },
  directives: {
      animateOnScroll
  }
};
</script>

<style scoped>
.list {
  padding: 20px 0;
}
.list > h5 {
  margin-bottom: 25px;
  text-align: justify;
}
.book-card {
  /* max-width: 150px; */
  /* max-height: 250px; */
}
.book-img {
  height: auto;
}
.book-title {
  font-size: 0.7rem;
}
.item {
  flex-basis: 80%;
}

@media (min-width: 580px) {
  .item {
  flex-basis: 40%;
}
}
@media (min-width: 768px) {
  .item {
  flex-basis: 18%;
}
}
@media (min-width: 992px) {
  .item {
  flex-basis: 40%;
}
}
@media (min-width: 1200px) {
  .item {
  flex-basis: 18%;
}
}
</style>
