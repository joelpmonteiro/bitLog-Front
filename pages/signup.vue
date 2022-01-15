<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="text-center mb-4">
        <!-- <a href="." class="navbar-brand navbar-brand-autodark"
          ><img src="./static/logo.svg" height="36" alt=""
        /></a> -->
      </div>
      <SignUpForm />
      <div class="text-center text-muted mt-3">
        Already have account? <a href="./sign-in.html" tabindex="-1">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from '~/components/sign-up-form/signup-form.vue'

export default {
  name: 'SIGNUP',
  components: { SignUpForm },
}
</script>

<style></style>
