<template>
  <div class="navbar-nav flex-row order-md-last">
    <a
      href="?theme=dark"
      class="nav-link px-0 hide-theme-dark"
      title="Enable dark mode"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
    >
      <!-- Download SVG icon from http://tabler-icons.io/i/moon -->
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
        <path
          d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
        />
      </svg>
    </a>
    <a
      href="?theme=light"
      class="nav-link px-0 hide-theme-light"
      title="Enable light mode"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
    >
      <!-- Download SVG icon from http://tabler-icons.io/i/sun -->
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
        <circle cx="12" cy="12" r="4" />
        <path
          d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
        />
      </svg>
    </a>
    <div class="nav-item dropdown d-none d-md-flex me-3">
      <a
        href="#"
        class="nav-link px-0"
        data-bs-toggle="dropdown"
        tabindex="-1"
        aria-label="Show notifications"
      >
        <!-- Download SVG icon from http://tabler-icons.io/i/bell -->
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
          <path
            d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
          />
          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
        </svg>
        <span class="badge bg-red"></span>
      </a>
      <div class="dropdown-menu dropdown-menu-end dropdown-menu-card">
        <div class="card">
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad amet consectetur exercitationem fugiat in ipsa ipsum, natus odio
            quidem quod repudiandae sapiente. Amet debitis et magni maxime
            necessitatibus ullam.
          </div>
        </div>
      </div>
    </div>

    <div class="nav-item d-none d-md-flex me-3">
      <div class="btn-list">
        <a
          href="https://github.com/tabler/tabler"
          class="btn"
          target="_blank"
          rel="noreferrer"
        >
          <!-- Download SVG icon from http://tabler-icons.io/i/brand-github -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user-exclamation"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            <line x1="19" y1="7" x2="19" y2="10"></line>
            <line x1="19" y1="14" x2="19" y2="14.01"></line>
          </svg>
          Registrar
        </a>
        <a
          href="https://github.com/sponsors/codecalm"
          class="btn btn-dark"
          target="_blank"
          rel="noreferrer"
        >
          <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user-circle"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <circle cx="12" cy="10" r="3"></circle>
            <path
              d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
            ></path>
          </svg>
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLayoutFree',
}
</script>

<style>
</style>