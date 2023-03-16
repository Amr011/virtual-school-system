<script>
import appHeader from '../components/header.vue'
import appFooter from '../components/footer.vue'
import loginPage from '../components/login/login.vue'
export default {
  name: 'Login',
  components: {
    appHeader,
    appFooter,
    loginPage,
  },
}
</script>

<template>
  <div>
    <app-header />
    <div class="myContainer">
      <login-page />
    </div>
    <app-footer />
  </div>
</template>

<style></style>
