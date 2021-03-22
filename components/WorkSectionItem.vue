<template>
  <div :id="id" :ref="id" class="WorkSectionItem mb-base-48">
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
        >
          {{ companyText }}
        </a> - {{ jobRole }}
      </h3>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkSectionItem',

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
    }
  }
}
</script>

<style lang="postcss" scoped>
.WorkSectionItem {
  display: grid;

  @screen smMax {
    grid-row-gap: 12px;
  }

  @screen sm {
    grid-template-columns: 0.1fr 0.9fr;
    grid-column-gap: 18px;
  }
}

.WorkSectionItem__logo {
  margin-top: 5px;
  height: fit-content;
}
</style>
