<template>
  <nav class="NavBar" :class="{'is-visible': isVisible}">
    <ul class="NavBar__list">
      <li
        v-for="(section, index) in sections"
        :key="index"
        class="NavBar__li t-h5"
        :class="{'is-active': activeSection === section.id}"
      >
        <button
          class="NavBar__li-btn"
          @click="$scrollTo(`#${section.id}`, 300,{ offset: -10, easing: [0.18, 0.2, 0.5, 0.94] })"
        >
          {{ section.name }}
          <transition name="fade">
            <span v-if="activeSection === section.id" class="NavBar__li-active-dot">
              <BaseSVG icon="dot" />
            </span>
          </transition>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    sections: { type: Array, required: true },
    activeSection: { type: String, default: null },
    isVisible: { type: Boolean, default: false }
  }
}
</script>

<style scoped lang="postcss">
.NavBar {
  @apply fixed p-b6 w-full bg-offwhite;

  top: 0;
  z-index: 3;
  transform: translateY(-100px);
  transition: transform 0.5s cubic-bezier(0.9, 0.15, 0.51, 0.95);
  border-bottom: 1px solid theme('colors.darkblueOp25');

  &.is-visible {
    transform: translateY(0);
  }

  @screen sm {
    @apply p-b12;
  }
}

.NavBar__list {
  @apply list-none p-0 flex items-center justify-center mx-auto;
}

.NavBar__li {
  @apply mb-0 text-darkblue flex flex-col items-center justify-center;

  transition: color 0.5s ease;

  &.is-active {
    @apply text-pink;
  }
}

.NavBar__li-btn {
  @apply relative p-b18;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.6;
  }
}

.NavBar__li-active-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8px;
  width: 0.4em;

  @screen sm {
    bottom: 6px;
  }
}
</style>
