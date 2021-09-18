<template>
  <section
    id="hobbies"
    ref="hobbies"
    class="Hobbies section bg-transparent relative"
  >
    <div class="wrapper">
      <h2 class="t-h2 mb-b54 mt-b36 text-center">
        Hobbies
      </h2>
      <ul class="Hobbies__list">
        <li
          v-for="(hobby, index) in hobbies"
          :key="index"
          class="Hobbies__list-item"
        >
          <p class="font-bold mb-12">
            {{ hobby.title }}
          </p>
          <div v-html="hobby.content" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import throttle from 'lodash.throttle'
import hobbies from '@/content/hobbies.js'

export default {
  name: 'HobbiesSection',
  data: () => ({ hobbies }),
  mounted() {
    if (!this.$refs.hobbies) return
    window.addEventListener('scroll', throttle(this.observe, 500))
  },
  destroyed() {
    if (!this.$refs.hobbies) return
    if (this.observer) this.observer.disconnect()
    window.removeEventListener('scroll', throttle(this.observe, 500))
  },
  methods: {
    observe() {
      if (!this.$refs.hobbies) return
      this.observer = new IntersectionObserver(this.onElementObserved)
      if (this.observer) this.observer.observe(this.$refs.hobbies)
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
.Hobbies__list {
  display: grid;
  max-width: 800px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  list-style-type: none;
  margin: 0 auto;

  @screen sm {
    grid-column-gap: 36px;
    grid-template-columns: repeat(2, 1fr);
  }

  @screen md {
    grid-row-gap: 24px;
    grid-column-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
  }
}

.Hobbies__list-item {
  @apply m-0;

  p {
    margin: 0;
  }
}
</style>
