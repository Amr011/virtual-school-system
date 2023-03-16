<script>
export default {
  name: 'footer',
  data() {
    return {
      thisYearDate: new Date().getFullYear(),
    }
  },
}
</script>

<template>
  <div class="footer-main">
    <div>
      <p>جميع الحقوق محفوظة © {{ thisYearDate }}</p>
    </div>
  </div>
</template>

<style>
.footer-main {
  @apply text-center text-sm uppercase text-gray-600;
}
.footer-main div {
  @apply flex justify-center text-center;
}
.footer-main div p {
  @apply mx-0.5;
}
</style>
