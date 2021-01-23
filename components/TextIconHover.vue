<template>
  <span class="TextIconHover">
    <span class="TextIconHover__txt">
      <slot name="text" />
    </span>
    <span class="TextIconHover__icon">
      <slot name="icon" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'TextIconHover'
}
</script>

<style lang="postcss">
.TextIconHover {
  position: relative;
  display: inline-block;
}

.TextIconHover__icon {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;

  .TextIconHover:hover & {
    opacity: 1;
  }
}

.TextIconHover__txt {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  .TextIconHover:hover & {
    opacity: 0.4;
  }
}
</style>
