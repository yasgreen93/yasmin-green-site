<template>
  <button
    class="BaseButton t-h4 mb-0"
    :class="{[`BaseButton--${theme.text}`]: theme}"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    theme: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="postcss">
.BaseButton {
  transition: color 0.3s ease;
}

.BaseButton--darkblue {
  color: theme('colors.darkblue');

  &:hover {
    color: theme('colors.offwhite');
  }
}

.BaseButton--offwhite {
  color: theme('colors.offwhite');

  &:hover {
    color: theme('colors.pink');
  }
}
</style>
