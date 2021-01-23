<template>
  <main class="Error">
    <section class="wrapper section text-center flex items-center justify-center flex-col h-full">
      <h1 class="Error__header text-primary">
        Woops, this page doesn't exist.
      </h1>
      <h2>
        Let's go <n-link to="/" class="t-link">
          <TextIconHover>
            <template #text>
              home
            </template>
            <template #icon>
              <img src="/android-chrome-192x192.png" alt="Yasmin Logo">
            </template>
          </TextIconHover></n-link>.
      </h2>
    </section>
  </main>
</template>

<script>
import TextIconHover from '@/components/TextIconHover.vue'

export default {
  name: 'Error',
  components: { TextIconHover }
}
</script>

<style lang="postcss" scoped>
.Error__header {
  max-width: calc(600 / 72 * 1em);
}
</style>
