<template>
  <div class="home-page">
    <Header />
    <mdbContainer>
      <mdbRow>
        <mdb-col col="8">
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

export default {
  name: 'HomePage',
  components: {
    Header,
    BestsellersLists,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style scoped>

</style>
