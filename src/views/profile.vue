<script>
import contentSection from '../components/profile/content-section.vue'
import navigationSidebar from '../components/profile/navigation-sidebar.vue'
import appHeader from '../components/header.vue'
import appFooter from '../components/footer.vue'
export default {
  name: 'profile',
  components: {
    contentSection,
    navigationSidebar,
    appHeader,
    appFooter,
  },

  data() {
    return {}
  },
}
</script>

<template>
  <div>
    <app-header />

    <div class="myContainer">
      <div class="profile-page">
        <navigation-sidebar class="col-span-3 bg-blue-300" />
        <content-section class="col-span-5 bg-red-300" />
      </div>
    </div>

    <app-footer />
  </div>
</template>
<style>
.profile-page {
  @apply my-20 grid grid-cols-8 items-start justify-center gap-4;
}
</style>
