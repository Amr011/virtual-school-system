<script>
import appHeader from './components/header.vue'
import appFooter from './components/footer.vue'
export default {
  components: {
    appHeader,
    appFooter,
  },
}
</script>

<template Header>
  <div>
    <main>
      <router-view v-if="$route.meta.title" />
    </main>
  </div>
</template>
<style>
.myContainer {
  @apply mx-auto max-w-[1170px];
}
</style>
