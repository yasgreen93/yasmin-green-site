<template>
  <div
    :id="id"
    class="WorkItem"
    :class="{
      [`theme-${theme.bg}`]: theme,
      [`text-${theme.text}`]: true,
      'is-active': active,
      'is-reversed': reverse
    }"
  >
    <div class="WorkItem__body" :class="{[`bg-${theme.bg}`]: true, [`z-${zIndex}`]: zIndex}">
      <!-- Main content -->
      <div class="WorkItem__content" :class="[`z-${zIndex}`]">
        <div class="WorkItem__scroll">
          <!-- Close Btn -->
          <button
            type="button"
            class="CloseBtn mb-0"
            :class="{[`CloseBtn--${theme.accent}`]: theme, [`z-${zIndex}`]: zIndex}"
            aria-label="close"
            @click="$emit('close', id)"
          >
            <BaseSVG icon="cross" />
          </button>

          <a
            :href="company.url"
            target="_blank"
            rel="noopener noreferrer"
            class="WorkItem__logo"
          >
            <img
              class="logo"
              :src="company.logo.url"
              :alt="company.logo.alt"
            >
          </a>
          <div class="WorkItem__text">
            <h3 class="mb-b18">
              <a
                :href="company.url"
                target="_blank"
                rel="noopener noreferrer"
                class="WorkItem__link"
                :class="`WorkItem__link--${theme.accent}`"
              >
                {{ company.name }}
              </a> - {{ role }}
            </h3>
            <div v-html="content" />
          </div>
        </div>
      </div>
    </div>

    <!-- Gradient with read more btn -->
    <div
      v-if="!hideShowMoreBtn"
      class="WorkItem__gradient"
      :class="`z-${zIndex}`"
    >
      <Gradient :color="theme.bg" :hide="active">
        <BaseButton :theme="theme" @click.native="$emit('open', id)">
          Read more
        </BaseButton>
      </Gradient>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkItem',

  props: {
    id: { type: String, required: true },
    company: { type: Object, required: true },
    content: { type: String, required: true },
    role: { type: String, required: true },
    theme: { type: Object, required: true },
    active: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false },
    hideShowMoreBtn: { type: Boolean, default: false },
    zIndex: { type: Number, default: 1 }
  }
}
</script>

<style lang="postcss" scoped>
.WorkItem {
  @apply relative w-full;

  height: 500px;
  transition: width 0.5s var(--cb-transition) 0.5s;

  @screen sm {
    @apply w-1/2;

    height: 600px;

    &.is-active {
      @apply w-full;

      transition: width 0.5s var(--cb-transition) 0s;
    }
  }

  &.is-reversed {
    justify-self: flex-end;
  }
}

.WorkItem__body {
  @apply absolute p-b42 w-full h-full top-0 left-0;

  transition: height 0.5s var(--cb-transition) 0s;

  .WorkItem.is-active & {
    height: 100vh;
    transition: height 0.5s var(--cb-transition) 0.5s;
  }

  @screen sm {
    @apply py-b48 px-b54;
  }

  @screen md {
    @apply py-b60 px-b84;
  }
}

.WorkItem__content {
  @apply relative mx-auto h-full overflow-hidden;

  max-width: fit-content;
}

.WorkItem__scroll {
  .WorkItem.is-active & {
    width: 100%;
    height: 90vh;
    overflow: hidden auto;
    -webkit-overflow-scrolling: touch;
  }
}

.WorkItem__logo {
  @apply block mb-b12;

  height: 30px;

  @screen md {
    height: 42px;
  }

  img {
    height: 100%;
  }
}

.WorkItem__gradient {
  position: absolute;
  bottom: 42px;
  left: 0;
  width: 100%;
  height: 40%;
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.5s var(--cb-transition) 0s, opacity 0.5s var(--cb-transition) 0s;

  .WorkItem.is-active & {
    opacity: 0;
    pointer-events: none;
    transform: translateY(100%);
    transition: transform 0.5s var(--cb-transition) 0.5s, opacity 0.5s var(--cb-transition) 0.3s;
  }
}

.CloseBtn {
  height: 1em;
  width: 1em;
  padding: 10px;
  display: flex;
  box-sizing: unset;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.3s ease 0s, color 0.3s ease;
  opacity: 0;
  pointer-events: none;

  .WorkItem.is-active & {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.3s ease 0.5s, color 0.3s ease;
  }
}

.CloseBtn--pink:hover {
  color: theme('colors.pink');
}

.CloseBtn--offwhite:hover {
  color: theme('colors.offwhite');
}

.theme-pink {
  ::selection {
    @apply bg-offwhite text-darkblue;
  }
}

.theme-darkblue {
  ::selection {
    @apply bg-pink text-darkblue;
  }
}
</style>
