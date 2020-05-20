<template>
  <div class="home-page">
    <Header />
    <mdbContainer class="mt-4">
      <mdbRow>
        <mdb-col col="8">
          <BestsellersLists/>
        </mdb-col>
        <mdb-col col="4">
          <Quote />
          <DayInPast />
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
