<template>
  <section
    id="work"
    ref="work"
    class="Work section pb-0"
  >
    <h2 class="t-h2 mb-b54 mt-b36">
      Work
    </h2>
    <div class="Work__body" :class="{ 'has-active-section': !!activeSection }">
      <WorkItem
        v-for="(item, index) in workData"
        :id="item.id"
        :key="`work-${index}`"
        :z-index="workData.length - index"
        :theme="item.theme"
        :company="item.company"
        :role="item.role"
        :content="item.content"
        :active="activeSection === item.id"
        :reverse="index % 2 !== 0"
        @open="setActive(item.id)"
        @close="close"
      />
    </div>
    <div class="Work__bg">
      <div ref="background">
        <img src="/background.png" alt="background image">
      </div>
    </div>
  </section>
</template>

<script>
import throttle from 'lodash.throttle'
import workData from '@/content/work.js'
import anime from 'animejs'

export default {
  name: 'WorkSection',
  data: () => ({
    workData,
    isSectionVisible: false,
    activeSection: null
  }),

  mounted() {
    if (this.$refs.background) {
      window.addEventListener('scroll', this.parallax)
    }
    if (!this.$refs.work) return
    window.addEventListener('scroll', throttle(this.observe, 500))
  },

  destroyed() {
    if (this.$refs.background) {
      window.removeEventListener('scroll', this.parallax)
    }
    if (!this.$refs.work) return
    if (this.observer) this.observer.disconnect()
    if (this.timeout) clearTimeout(this.timeout)
    window.removeEventListener('scroll', throttle(this.observe, 500))
  },

  methods: {
    setActive(id) {
      this.$scrollTo(`#${id}`, 300, {
        easing: [0.18, 0.2, 0.5, 0.94],
        offset: 0,
        onDone: () => {
          this.activeSection = id
          this.$toggleScroll(true)
        }
      })
      this.$emit('section-active', true)
    },

    parallax() {
      if (!this.$refs.background || !IntersectionObserver) return

      this.observer = new IntersectionObserver(this.onElementObserved)
      if (this.observer) this.observer.observe(this.$refs.background)
      if (!this.isSectionVisible) return

      const scrolled = window.pageYOffset
      const coords = (scrolled * 0.4)

      anime({
        targets: this.$refs.background,
        duration: 0,
        translateY: coords,
        easing: 'linear'
      })
    },

    close() {
      const t = this
      this.$toggleScroll(false)
      this.activeSection = null
      const onCloseTransitionEndTime = 850
      this.timeout = setTimeout(() => { t.$emit('section-active', false) }, onCloseTransitionEndTime)
    },

    observe() {
      if (!this.$refs.work) return
      this.observer = new IntersectionObserver(this.onElementObserved)
      if (this.observer) this.observer.observe(this.$refs.work)
    },

    onElementObserved(entries) {
      entries.forEach(({ isIntersecting, intersectionRatio }) => {
        this.isSectionVisible = isIntersecting
        if (intersectionRatio > 0.2) this.$emit('intersecting')
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.Work {
  @apply flex items-center flex-col relative;
}

.Work__body {
  @apply grid grid-cols-1 w-full;
}

.Work__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
