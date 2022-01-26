<template>
  <div><button @click.prevent="connect">Connectar</button></div>
</template>

<script>
export default {
  name: 'TestPage',
  methods: {
    async connect() {
      try {
        const response = await this.$axios.$get(
          '/test/0x7746470733738eBA82357A9E38ACFF69a21BE8A2'
        )
        // eslint-disable-next-line no-console
        console.log(response)
        // http://localhost:3333/test
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
  },
}
</script>

<style>
</style>