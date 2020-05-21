<template>
  <div class="list">
    <h5>List {{ list.display_name }}</h5>
    <mdbRow>
      <mdbCol :action="true" v-for="(book, index) in list.books" :key="index">
        <router-link :to="'/book-details/' + book.title">
          <mdb-card class="book-card">
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
  max-width: 150px;
  max-height: 250px;
}
.book-img {
  height: auto;
}
.book-title {
  font-size: 0.7rem;
}
</style>
