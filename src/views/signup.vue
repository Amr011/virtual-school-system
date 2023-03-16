<script>
import appHeader from '../components/header.vue'
import appFooter from '../components/footer.vue'
import signupPage from '../components/signup/signup.vue'
export default {
  name: 'Login',
  components: {
    appHeader,
    appFooter,
    signupPage,
  },
}
</script>

<template>
  <div>
    <app-header />
    <div class="myContainer">
      <signup-page />
    </div>
    <app-footer />
  </div>
</template>

<style></style>
