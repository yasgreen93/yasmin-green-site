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
import throttle from 'lodash.throttle'

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
  }),
  mounted() {
    if (!this.$refs.skills) return
    window.addEventListener('scroll', throttle(this.observe, 500))
  },
  destroyed() {
    if (!this.$refs.skills) return
    if (this.observer) this.observer.disconnect()
    window.removeEventListener('scroll', throttle(this.observe, 500))
  },
  methods: {
    observe() {
      if (!this.$refs.skills) return
      this.observer = new IntersectionObserver(this.onElementObserved)
      if (this.observer) this.observer.observe(this.$refs.skills)
    },
    onElementObserved(entries) {
      entries.forEach(({ intersectionRatio }) => {
        if (intersectionRatio > 0.75) this.$emit('intersecting')
      })
    }
  }
}
</script>
