<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="ELink"
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
  @apply underline transition-colors duration-300 ease-in-out;

  color: inherit;
}

.ELink:hover {
  @apply text-violet fill-current;
}

.ELink--no-underline {
  @apply no-underline;
}
</style>
