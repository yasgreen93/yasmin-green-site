<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="ELink"
    :class="{[`ELink--${hover}`]: hover}"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'ELink',
  props: {
    href: {
      type: String,
      required: true
    },
    hover: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="postcss">
.ELink {
  text-decoration: underline;
  transition: color 0.3s ease;
  color: inherit;
}

.ELink--offwhite:hover {
  color: theme('colors.offwhite');
}

.ELink--pink:hover {
  color: theme('colors.pink');
}
</style>
