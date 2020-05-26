<template>
  <div class="home-page">
    <Header />
    <mdbContainer class="mt-4">
      <mdbRow>
        <mdb-col  class="col-12 col-lg-4">
          <Quote />
          <DayInPast />
        </mdb-col>
        <mdb-col class="col-12 col-lg-8">
          <BestsellersLists/>
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
import DayInPast from './DayInPast';

export default {
  name: 'HomePage',
  components: {
    Header,
    BestsellersLists,
    Quote,
    DayInPast,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style scoped>

</style>
