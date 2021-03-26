<template>
  <section
    id="skills"
    ref="skills"
    class="Skills section bg-pink"
  >
    <div class="wrapper">
      <h2 class="t-h2 mb-b54 mt-b36 text-center">
        Skills
      </h2>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          {{ skill }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data: () => ({
    skills: [
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'SCSS',
      'TailwindCSS',
      'VueJS',
      'ReactJS',
      'NuxtJS',
      'NodeJS'
    ]
  })
}
</script>

<style scoped lang="postcss">

</style>
