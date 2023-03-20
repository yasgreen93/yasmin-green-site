<template>
  <section class="bg-off-black text-light-grey py-13 md:py-16">
    <GridWrapper
      id="work"
      ref="work"
      class="container"
    >
      <h2 class="t-h2 col-span-full text-center">
        Work Experience
      </h2>
      <div class="col-span-full md:col-start-3 lg:col-span-7 sm:col-start-1 lg:col-start-4">
        <WorkItem
          v-for="(item, index) in workData"
          :id="item.id"
          :key="`work-${index}`"
          :first-of-type="index === 0"
          :last-of-type="index === workData.length - 1"
          :company="item.company"
          :role="item.role"
          :content="item.content"
        />
      </div>
    </GridWrapper>
  </section>
</template>

<script>
import workData from '~/content/work'

export default {
  name: 'WorkSection',

  data: () => ({ workData })
}
</script>
