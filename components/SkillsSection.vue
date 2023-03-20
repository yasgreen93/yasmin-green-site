<template>
  <GridWrapper
    id="skills"
    ref="skills"
    tag="section"
    class="container section"
  >
    <h2 class="t-h2 col-span-full text-center">
      Skills
    </h2>
    <div class="col-span-full md:col-start-3 lg:col-span-7 sm:col-start-1 lg:col-start-4">
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-10">
        <li
          v-for="(skill, index) in skills"
          :key="index"
          class="list-none col-span-1 mdMax:text-center"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </GridWrapper>
</template>

<script>
import skills from '~/content/skills'

export default {
  name: 'SkillsSection',

  data: () => ({ skills })
}
</script>
