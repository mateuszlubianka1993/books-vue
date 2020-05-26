<template>
  <section style="padding-bottom: 100px" class="rgba-indigo-light">
    <!-- Purple Header -->
    <mdb-edge-header  class="header"/>

    <!-- Card Container -->
    <mdb-container free-bird class="animated fadeIn">
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none white z-depth-1 py-2 px-2 lime lighten-4">

          <mdb-card-body>
            <h1 class="h2-responsive"><strong><span class="font-weight-bold pink-text">B</span>ooks <span class="font-weight-bold pink-text">A</span>pp</strong></h1>
            <p class="pb-4">Everything you need about books</p>

            <!--Body-->
            

          </mdb-card-body>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <!-- /.Card Container -->
  </section>
</template>

<script>
import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody } from 'mdbvue';

export default {
  name: 'Header',
    components: {
      mdbEdgeHeader,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCardBody
    }
}
</script>

<style scoped>
.header {
  background-image: url('../assets/header.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
