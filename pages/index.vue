<template>
  <main class="Home">
    <HeaderSection @intersecting="setHeaderVisiblity" />
    <NavBar
      :is-visible="showNavbar"
      :sections="sections"
      :active-section="activeSection"
    />
    <WorkSection
      @intersecting="setActive('work')"
      @section-active="setWorkSectionVisibility"
    />
    <SkillsSection @intersecting="setActive('skills')" />
    <HobbiesSection @intersecting="setActive('hobbies')" />
  </main>
</template>

<script>
export default {
  name: 'Home',
  transition: 'fade',
  data: () => ({
    activeSection: null,
    workSectionActive: false,
    headerVisible: true,
    sections: [
      { name: 'Work', id: 'work' },
      { name: 'Skills', id: 'skills' },
      { name: 'Hobbies', id: 'hobbies' }
    ]
  }),
  computed: {
    showNavbar() {
      return !this.headerVisible && !this.workSectionActive
    }
  },
  methods: {
    setActive(id) {
      this.activeSection = id
    },
    setHeaderVisiblity(visible) {
      this.headerVisible = visible
    },
    setWorkSectionVisibility(visible) {
      this.workSectionActive = visible
    }
  }
}
</script>
