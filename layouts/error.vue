<template>
  <div>
    <main class="Error">
      <section class="wrapper section text-center flex items-center justify-center flex-col h-full">
        <template v-if="error.statusCode === 404">
          <h1 class="Error__header text-primary">
            Woops, this page doesn't exist.
          </h1>
          <h2>
            Let's go
            <n-link to="/" class="t-link underline">
              home</n-link>.
          </h2>
        </template>
        <template v-else>
          <h1 class="Error__header text-primary">
            An error occured...
          </h1>
          <p>
            {{ error.message }}
          </p>
        </template>
      </section>
    </main>
  </div>
</template>

<script>
import TextIconHover from '@/components/TextIconHover.vue'

export default {
  name: 'Error',
  components: { TextIconHover },
  props: ['error']
}
</script>

<style lang="postcss" scoped>
.Error {
  height: calc(100vh - 250px);
}

.Error__header {
  max-width: calc(650 / 72 * 1em);
}
</style>
