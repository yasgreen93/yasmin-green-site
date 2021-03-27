<template>
  <section class="Header__header section bg-darkblue text-offwhite">
    <div ref="header" class="wrapper">
      <transition name="fade-up" appear>
        <div v-if="showContent">
          <img class="Header__avatar" src="/profile-pic.jpg" alt="avatar">
          <h1 class="t-h1 text-offwhite">
            Yasmin Green
          </h1>
        </div>
      </transition>

      <transition name="fade-up-delay" appear>
        <p v-if="showContent" class="Header__intro-txt t-h3">
          Forensic Scientist turned web developer, currently enjoying working as a Technical Lead at Rotate° in London.
        </p>
      </transition>
    </div>
    <transition name="fade-up-delay" appear>
      <button
        v-if="showContent"
        ref="scrollBtn"
        class="Header__down-arr t-h2"
        aria-label="scroll down"
        @click="$scrollTo('#work', 300,{ offset: -20, easing: [0.18, 0.2, 0.5, 0.94] })"
      >
        <BaseSVG icon="down-arrow" />
      </button>
    </transition>
  </section>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'HeaderSection',

  data: () => ({
    showContent: false,
    isHeaderVisible: false
  }),

  mounted() {
    this.$nextTick(() => {
      this.showContent = true

      if (!this.$refs.header) return
      window.addEventListener('scroll', this.parallax)
    })
  },

  destroyed() {
    if (!this.$refs.header) return
    if (this.observer) this.observer.disconnect()
    window.removeEventListener('scroll', this.parallax)
  },

  methods: {
    parallax() {
      if (!this.$refs.header || !IntersectionObserver) return

      this.observer = new IntersectionObserver(this.onElementObserved)
      if (this.observer) this.observer.observe(this.$refs.header)
      if (!this.isHeaderVisible) return

      const scrolled = window.pageYOffset
      const pageHeight = window.innerHeight
      const opacity = (scrolled / pageHeight * 100) >= 25 ? 0 : 1
      const coords = (scrolled * 0.2)

      anime({
        targets: this.$refs.header,
        duration: 0,
        translateY: coords,
        easing: 'linear'
      })
      if (this.$refs.scrollBtn) {
        anime({
          targets: this.$refs.scrollBtn,
          duration: 300,
          opacity,
          easing: 'linear'
        })
      }
    },
    onElementObserved(entries) {
      entries.forEach(({ isIntersecting }) => {
        this.isHeaderVisible = isIntersecting
        this.$emit('intersecting', isIntersecting)
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.Header__header {
  @apply flex flex-col items-center justify-center text-center;

  height: 100vh;
}

.Header__avatar {
  @apply mb-b30;

  display: inline-block;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 75px;

  @screen sm {
    width: 150px;
    height: 150px;
  }
}

.Header__intro-txt {
  max-width: calc(600 / 33 * 1em);
}

.icon {
  width: 50px;
}

.Header__down-arr {
  position: absolute;
  bottom: 0.5em;
  margin: 0;
  height: 0.75em;
  padding: 5px;
  box-sizing: unset;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    svg {
      transform: translateY(4px);
    }
  }
}
</style>
