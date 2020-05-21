<template>
  <!-- Footer -->
  <mdb-footer color="blue" class="font-small mt-4 fixed-bottom">
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://github.com/mateuszlubianka1993/books-vue"> Books Vue App </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer
    }
  }
</script>
