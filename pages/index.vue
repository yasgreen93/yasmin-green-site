<template>
  <main class="Home relative">
    <HeaderSection />

    <WorkSection />
  </main>
</template>

<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import WorkSection from '@/components/sections/WorkSection.vue'

export default {
  name: 'Home',

  components: { WorkSection, HeaderSection },

  transition: 'fade'
}
</script>
