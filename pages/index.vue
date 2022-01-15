<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',
  fetch({ redirect }) {
    redirect('/login')
  },
}
</script>
