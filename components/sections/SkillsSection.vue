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
      <ul class="Skills__list">
        <li
          v-for="(skill, index) in skills"
          :key="index"
          class="Skills__list-item"
        >
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
      'VueJS',
      'NuxtJS',
      'HTML',
      'NodeJS',
      'CSS',
      'SCSS',
      'TailwindCSS',
      'ReactJS',
      'React Native',
      'Jest',
      'Enzyme',
      'GraphQL',
      'Storybook'
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

<style lang="postcss" scoped>
.Skills__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  list-style-type: none;
  grid-row-gap: 18px;

  @screen sm {
    grid-row-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

.Skills__list-item {
  align-self: center;
  justify-self: center;
}
</style>
