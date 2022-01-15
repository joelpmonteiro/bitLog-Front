<template>
  <form class="card card-md" @submit.prevent="createAccount">
    <div class="card-body">
      <h2 class="card-title text-center mb-4">Create new account</h2>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          v-model.lazy="register.name"
          type="text"
          class="form-control"
          placeholder="Enter name"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          v-model.lazy="register.email"
          type="email"
          class="form-control"
          placeholder="Enter email"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <div class="input-group input-group-flat">
          <input
            v-model.lazy="register.password"
            type="password"
            class="form-control"
            placeholder="Password"
            autocomplete="off"
          />
          <span class="input-group-text">
            <a
              href="#"
              class="link-secondary"
              title="Show password"
              data-bs-toggle="tooltip"
              ><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="2" />
                <path
                  d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-check">
          <input type="checkbox" class="form-check-input" />
          <span class="form-check-label"
            >Agree the
            <a href="./terms-of-service.html" tabindex="-1">terms and policy</a
            >.</span
          >
        </label>
      </div>
      <div class="form-footer">
        <button type="submit" class="btn btn-primary w-100">
          Create new account
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { register } from '../../services/axios.js'
export default {
  name: 'SignUpForm',
  data() {
    return {
      register: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async createAccount() {
      try {
        const resp = await register(this.$axios, this.register)
        if (resp.status === 201) {
          alert(resp.data.msg)
          this.register.name = ''
          this.register.email = ''
          this.register.password = ''
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        }
      } catch (e) {
        // console.log(e)
        if (e.response !== undefined) {
          if (e.response.status === 404) alert(e.response.data.msg)
          if (e.response.status === 500) alert(e.response.data.msg)
        } else alert('Erro em nosso sistema, contate o administrador!')
      }
    },
  },
}
</script>

<style></style>
