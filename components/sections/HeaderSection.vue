<template>
  <section class="Header__header wrapper section">
    <transition name="fade-up" appear>
      <div v-if="showContent">
        <img class="Header__avatar" src="/profile-pic.jpg" alt="avatar">
        <h1 class="t-h1 text-primary">
          Yasmin Green
        </h1>
      </div>
    </transition>

    <transition name="fade-up-delay" appear>
      <p v-if="showContent" class="Header__intro-txt t-h3">
        <TextIconHover>
          <template #text>
            Forensic Scientist
          </template>
          <template #icon>
            <img class="icon" src="/fingerprint.svg" alt="Fingerprint">
          </template>
        </TextIconHover>
        turned <TextIconHover>
          <template #text>
            web developer
          </template>
          <template #icon>
            <img class="icon" src="/developer.svg" alt="Developer">
          </template>
        </TextIconHover>, currently enjoying working as a Technical Lead at
        <a
          href="https://rotate.studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TextIconHover>
            <template #text>
              Rotate°
            </template>
            <template #icon>
              <img src="/rotate-logo.png" alt="Rotate logo">
            </template>
          </TextIconHover>
        </a> in London.
      </p>
    </transition>

    <transition name="fade-up-delay" appear>
      <button
        v-if="showContent"
        class="Header__down-arr t-h2"
        aria-label="scroll down"
        @click="$scrollTo('#work', 300, { easing: 'linear'})"
      >
        >
      </button>
    </transition>
  </section>
</template>

<script>
import TextIconHover from '@/components/TextIconHover.vue'

export default {
  name: 'HeaderSection',

  components: { TextIconHover },

  data: () => ({
    showContent: false
  }),

  mounted () {
    this.$nextTick(() => {
      this.showContent = true
    })
  }
}
</script>

<style lang="postcss" scoped>
.Header__header {
  @apply flex flex-col items-center justify-center text-center;

  height: 100vh;
}

.Header__avatar {
  @apply mb-base-30;

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
  transform: rotate(90deg);
  position: absolute;
  bottom: 0.5em;
  margin: 0;
}
</style>
