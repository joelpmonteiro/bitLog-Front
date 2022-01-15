<template>
  <header
    class="navbar navbar-expand-md navbar-dark navbar-overlap d-print-none"
  >
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1
        class="
          navbar-brand navbar-brand-autodark
          d-none-navbar-horizontal
          pe-0 pe-md-3
        "
      >
        <a href=".">
          <img
            src="../../static/logo-white.svg"
            width="110"
            height="32"
            alt="Tabler"
            class="navbar-brand-image"
          />
        </a>
      </h1>
      <NavLayout></NavLayout>
      <NavCollapse></NavCollapse>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderLayout',
}
</script>

<style>
</style>
