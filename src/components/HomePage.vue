<template>
  <div class="home-page">
    <Header />
    <BestsellersLists/>
  </div>
</template>

<script>
import Header from './Header';
import BestsellersLists from './BestsellersLists';

export default {
  name: 'HomePage',
  components: {
    Header,
    BestsellersLists
  }
}
</script>

<style scoped>

</style>
