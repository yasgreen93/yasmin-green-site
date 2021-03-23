<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="ExternalLink"
    :class="{[`ExternalLink--${hover}`]: hover}"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
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

<style lang="postcss" scoped>
.ExternalLink {
  text-decoration: underline;
  transition: color 0.3s ease;
  color: inherit;
}

.ExternalLink--offwhite:hover {
  color: theme('colors.offwhite');
}

.ExternalLink--pink:hover {
  color: theme('colors.pink');
}
</style>
