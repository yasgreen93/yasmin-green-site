<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="ExternalLink"
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
    }
  }
}
</script>

<style lang="postcss" scoped>
.ExternalLink {
  text-decoration: underline;
  transition: color 0.3s ease;
  color: inherit;

  &:hover {
    color: theme('colors.primary');
  }
}
</style>
