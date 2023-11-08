<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">

      <nav class="navbar navbar-expand-lg bg-success navbar-dark">
          <div class="py-4 mx-auto d-flex justify-content-center flex-wrap
            col-lg-10 justify-content-lg-between align-items-center">
            <a class="navbar-brand d-flex gap-md-3 flex-wrap
              justify-content-center me-0" href="/">
              <img alt="Vue logo" class="logo" src="@/assets/vue_logo.svg"
                width="60" />
              <h1 class="d-inline text-wrap text-center">Product CRUD - Vue.js + Laravel API</h1>
              <img alt="Vue logo" class="logo" src="@/assets/laravel_logo.svg"
                width="60" />
            </a>

            <RouterLink to="/create" class="btn btn-primary mt-4 mt-md-0">
              <i class="fa-solid fa-plus"></i>
              Add
            </RouterLink>
          </div>
      </nav>
    </div>
  </header>

  <div class="container-fluid mt-3">
    <RouterView />
  </div>
</template>
