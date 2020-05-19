<template>
  <div class="home-page">
    <Header />
    <mdbContainer>
      <mdbRow>
        <mdb-col col="8">
          <BestsellersLists/>
        </mdb-col>
        <mdb-col col="4">
          <Quote />
        </mdb-col>
      </mdbRow>
    </mdbContainer>
  </div>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';

import Header from './Header';
import BestsellersLists from './BestsellersLists';
import Quote from './Quote';

export default {
  name: 'HomePage',
  components: {
    Header,
    BestsellersLists,
    Quote,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style scoped>

</style>
