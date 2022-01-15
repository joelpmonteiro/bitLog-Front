<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="text-center mb-4">
        <!-- <a href="." class="navbar-brand navbar-brand-autodark">
          <img src="../static/logo.svg" height="36" alt />
        </a> -->
      </div>
      <LoginForm />
      <div class="text-center text-muted mt-3">
        Don't have account yet?
        <!-- <a href="./sign-up.html">Sign up</a> -->
        <NuxtLink to="/signup" tabindex="-1">Sign up</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from '~/components/login-form/login-form.vue'

export default {
  name: 'LoginPage',
  components: { LoginForm },
}
</script>

<style></style>
