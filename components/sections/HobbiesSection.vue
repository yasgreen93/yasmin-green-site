<template>
  <section
    id="hobbies"
    ref="hobbies"
    class="Hobbies section bg-offwhite"
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
          {{ hobby }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import throttle from 'lodash.throttle'

export default {
  name: 'HobbiesSection',
  data: () => ({
    hobbies: [
      'Knitting',
      'Reading',
      'Skateboarding',
      'Bouldering',
      'Snowboarding',
      'Skiing',
      'Guitar',
      'Piano'
    ]
  }),
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

.Hobbies__list-item {
  align-self: center;
  justify-self: center;
}

::selection {
  @apply bg-pink text-darkblue;
}
</style>
