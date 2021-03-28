<template>
  <footer class="Footer relative z-1">
    <div class="wrapper flex flex-col items-center justify-center">
      <p class="text-center text-offwhite">
        &copy; Yasmin Green {{ new Date().getFullYear() }}
      </p>
      <p class="text-center text-offwhite">
        Designed and built using NuxtJS (2021).
      </p>

      <div class="flex text-offwhite">
        <ELink
          href="https://github.com/yasgreen93"
          class="Footer__link"
          hover="pink"
          aria-label="Github"
        >
          <BaseSVG icon="github" />
        </ELink>
        <ELink
          href="https://www.linkedin.com/in/yasmingreen-dev/"
          class="Footer__link"
          hover="pink"
          aria-label="Linkedin"
        >
          <BaseSVG icon="linkedin" />
        </ELink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.Footer {
  @apply bg-darkblue w-full py-b54 flex items-center;

  height: 250px;
}

.Footer__links {
  @apply flex;
}

.Footer__link {
  height: 1.5em;
  width: 1.5em;
  padding: 8px;
  box-sizing: unset;
  color: theme('colors.offwhite');

  &:last-of-type {
    margin-left: 24px;
  }
}
</style>
