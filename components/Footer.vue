<template>
  <footer class="Footer relative">
    <div class="wrapper flex flex-col items-center justify-center">
      <p class="text-center text-light-grey">
        &copy; Yasmin Green {{ new Date().getFullYear() }}
      </p>
      <p class="text-center text-light-grey">
        Designed and built using NuxtJS (2021).
      </p>

      <div class="flex text-light-grey">
        <ELink
          href="https://github.com/yasgreen93"
          class="Footer__link"
          aria-label="Github"
        >
          <BaseSVG icon="github" />
        </ELink>
        <ELink
          href="https://www.linkedin.com/in/yasmingreen-dev/"
          class="Footer__link"
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
  @apply bg-off-black w-full py-9 flex items-center;

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
  color: theme('colors.off-white');

  svg {
    transition: fill 0.3s ease;
  }

  &:last-of-type {
    margin-left: 24px;
  }

  &:hover svg {
    fill: theme('colors.violet');
  }
}
</style>
