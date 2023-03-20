<template>
  <header class="Header__header py-6 md:py-10 bg-off-black text-light-grey relative">
    <div ref="header" class="wrapper">
      <transition name="fade-up" appear>
        <div v-if="showContent">
          <img class="Header__avatar" src="/profile-pic.jpg" alt="avatar">
          <h1 class="t-h1 text-light-grey">
            Yasmin Green
          </h1>
        </div>
      </transition>

      <transition name="fade-up-delay" appear>
        <p v-if="showContent" class="Header__intro-txt t-h3">
          Forensic Scientist turned Software Engineer in Vancouver, BC.
        </p>
      </transition>
    </div>
    <transition name="fade-up-delay" appear>
      <button
        v-if="showContent"
        ref="scrollBtn"
        class="Header__down-arr t-h2"
        aria-label="scroll down"
        @click="$scrollTo('#skills', 300,{ offset: -96, easing: [0.18, 0.2, 0.5, 0.94] })"
      >
        <BaseSVG icon="down-arrow" />
      </button>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',

  data: () => ({
    showContent: false,
    isHeaderVisible: false
  }),

  mounted() {
    this.$nextTick(() => {
      this.showContent = true
    })
  }
}
</script>

<style lang="postcss" scoped>
.Header__header {
  @apply flex flex-col items-center justify-center text-center;

  height: 95dvh;
}

.Header__avatar {
  @apply mb-5;

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
    transition: transform 0.3s ease, fill 0.3s ease;
  }

  &:hover {
    svg {
      fill: theme('colors.violet');
      transform: translateY(4px);
    }
  }
}
</style>
