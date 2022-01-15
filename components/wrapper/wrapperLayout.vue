<template>
  <div class="page-wrapper">
    <wrapper-header></wrapper-header>
    <contentBodyLayout></contentBodyLayout>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import wrapperHeader from '@/components/wrapper/wrapperHeader.vue'
import contentBodyLayout from '@/components/content/bodyLayout.vue'
import footerLayout from '@/components/footer/footerLayout.vue'
export default {
  components: {
    wrapperHeader,
    contentBodyLayout,
    footerLayout,
  },
}
</script>

<style>
</style>
