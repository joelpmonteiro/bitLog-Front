<template>
  <div class="sticky-top">
    <header-layout-free></header-layout-free>
    <LazyNavMenu></LazyNavMenu>
  </div>
</template>

<script>
import headerLayoutFree from '@/components/header/headerLayoutFree.vue'
export default {
  name: 'HeaderTop',
  components: {
    headerLayoutFree,
  },
}
</script>

<style>
</style>