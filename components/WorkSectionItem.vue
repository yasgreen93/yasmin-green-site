<template>
  <div
    :id="id"
    class="WorkSectionItem"
    :class="{[`text-${theme.text}`]: true, 'is-active': active}"
  >
    <transition name="fade">
      <div v-if="!active" class="gradient" :class="`gradient-${theme.bg}`">
        <button type="button" class="ReadMoreBtn t-h4 mb-0" @click="$emit('open', id)">
          Read more
        </button>
      </div>
    </transition>
    <transition name="fade">
      <button
        v-if="active"
        type="button"
        class="CloseBtn mb-0"
        :class="`CloseBtn--${theme.accent}`"
        aria-label="close"
        @click="$emit('close', id)"
      >
        <BaseSVG icon="cross" />
      </button>
    </transition>
    <a
      :href="companyUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="WorkSectionItem__logo"
    >
      <slot name="company-logo" />
    </a>
    <div class="WorkSectionItem__text">
      <h3>
        <a
          :href="companyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="WorkSectionItem__link"
          :class="`WorkSectionItem__link--${theme.accent}`"
        >
          {{ companyText }}
        </a> - {{ jobRole }}
      </h3>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import BaseSVG from '@/components/BaseSVG.vue'
export default {
  name: 'WorkSectionItem',
  components: { BaseSVG },
  props: {
    id: {
      type: String,
      required: true
    },
    companyUrl: {
      type: String,
      required: true
    },
    companyText: {
      type: String,
      required: true
    },
    jobRole: {
      type: String,
      required: true
    },
    theme: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.WorkSectionItem {
  @apply grid relative;

  height: 100%;
  overflow: hidden;

  @screen smMax {
    grid-row-gap: 12px;
  }

  @screen sm {
    grid-template-columns: 0.1fr 0.9fr;
    grid-column-gap: 18px;
  }

  &.is-active {
    z-index: 2;
  }
}

.WorkSectionItem__logo {
  margin-top: 5px;
  height: fit-content;
}

.WorkSectionItem__link {
  transition: color 0.3s ease;
  color: inherit;
}

.WorkSectionItem__link--offwhite:hover {
  color: theme('colors.offwhite');
}

.WorkSectionItem__link--pink:hover {
  color: theme('colors.pink');
}

.gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 40%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.gradient-pink {
  background: linear-gradient(#ff86921c 5%, #ff869275 10%, #ff8692);

  .ReadMoreBtn:hover {
    color: theme('colors.offwhite');
  }
}

.gradient-darkblue {
  background: linear-gradient(#1e1e5d1c 5%, #1e1e5d75 10%, #1e1e5d);

  .ReadMoreBtn:hover {
    color: theme('colors.pink');
  }
}

.ReadMoreBtn,
.CloseBtn {
  transition: color 0.3s ease;
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
  top: 3px;
}

.CloseBtn--pink:hover {
  color: theme('colors.pink');
}

.CloseBtn--offwhite:hover {
  color: theme('colors.offwhite');
}
</style>
