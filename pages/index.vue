<template>
  <main class="Home">
    <HeaderSection />
    <SkillsSection />
    <WorkSection />
    <HobbiesSection />
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
  })
}
</script>
