<template>
  <mdb-navbar expand="large" dark color="yellow darken-1" class="fixed-top">
    <mdb-navbar-brand href="#">
      <mdb-icon class="font-weight-bold pink-text" icon="book-open" /> Book<span class="font-weight-bold pink-text">s</span> Ap<span class="font-weight-bold pink-text">p</span>
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <router-link to="/" ><mdb-nav-item active>Home</mdb-nav-item></router-link>
        <mdb-nav-item to="/search">Search</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon } from 'mdbvue';

export default {
  name: 'Navigation',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbIcon
    }
}
</script>

<style scoped>

</style>
