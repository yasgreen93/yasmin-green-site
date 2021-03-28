<template>
  <div
    class="gradient"
    :class="`gradient-${color}`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Gradient',

  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="postcss">
.gradient {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: opacity 0.3s cubic-bezier(0.9, 0.15, 0.51, 0.95);
}

.gradient-pink {
  background: linear-gradient(#ff86921c 5%, #ff869275 10%, #ff8692);
}

.gradient-darkblue {
  background: linear-gradient(#1e1e5d1c 5%, #1e1e5d75 10%, #1e1e5d);
}
</style>
