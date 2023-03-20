<template>
  <component :is="tag" class="grid grid-cols-4 px-4 sm:px-8 md:grid-cols-12 gap-4 md:gap-5">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'GridWrapper',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
