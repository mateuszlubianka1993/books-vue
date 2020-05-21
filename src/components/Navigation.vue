<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand href="#">
      Navbar
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <router-link to="/" ><mdb-nav-item active>Home</mdb-nav-item></router-link>
        <mdb-nav-item href="#">Link</mdb-nav-item>
        <mdb-nav-item class="disabled" href="#">Disabled</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Action</mdb-dropdown-item>
            <mdb-dropdown-item>Another action</mdb-dropdown-item>
            <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';

export default {
  name: 'Navigation',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    }
}
</script>

<style scoped>

</style>
