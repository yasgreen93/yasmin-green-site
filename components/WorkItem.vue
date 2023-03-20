<template>
  <div
    :id="id"
    class="my-8 md:my-10"
    :class="{['mt-0 md:mt-0']: firstOfType, ['mb-0 md:mb-0']: lastOfType,}"
  >
    <h3 class="mb-3">
      <a
        :href="company.url"
        target="_blank"
        rel="noopener noreferrer"
        class="ELink ELink--no-underline"
      >
        {{ company.name }}
      </a> - {{ role }}
    </h3>
    <div v-html="content" />
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
    firstOfType: { type: Boolean, default: false },
    lastOfType: { type: Boolean, default: false }
  }
}
</script>
