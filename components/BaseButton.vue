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

.BaseButton--off-black {
  color: theme('colors.off-black');

  &:hover {
    color: theme('colors.off-white');
  }
}

.BaseButton--off-white {
  color: theme('colors.off-white');

  &:hover {
    color: theme('colors.violet');
  }
}
</style>
