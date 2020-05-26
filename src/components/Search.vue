<template>
  <div>
    <form class="container">
      <mdb-row>
        <mdb-col class="col-10">
            <mdb-input type="text" placeholder="Search" aria-label="Search"/>
        </mdb-col>
        <mdb-col class="col-2 d-flex align-items-center">
          <mdb-btn size="sm" color="indigo">Indigo</mdb-btn>
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
    }
  }
</script>
