<script>
export default {
  name: 'header',
  props: {},
}
</script>
<template>
  <div class="app-header">
    <div class="header-grid myContainer">
      <div class="header-logo">LOGO</div>
      <div class="header-nav">Navigation</div>
      <div class="header-cta">CTA</div>
    </div>
  </div>
</template>

<style>
.app-header {
  @apply shadow-sm;
}
.header-grid {
  @apply grid grid-cols-3 items-center py-4;
}
.header-cta {
  @apply flex justify-end bg-green-400;
}
.header-nav {
  @apply flex justify-center bg-blue-400;
}
.header-logo {
  @apply flex justify-start bg-red-400;
}
</style>
