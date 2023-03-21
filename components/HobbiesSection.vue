<template>
  <GridWrapper
    id="hobbies"
    ref="hobbies"
    tag="section"
    class="section bg-transparent relative"
  >
    <h2 class="t-h2 text-center col-span-full">
      Hobbies
    </h2>
    <div class="col-span-full md:col-start-3 md:col-span-8 lg:col-span-6 sm:col-start-1 lg:col-start-4">
      <ul class="grid grid-cols-2 gap-6 md:gap-5">
        <li
          v-for="(hobby, index) in hobbies"
          :key="index"
          class="mb-0 list-none col-span-1"
        >
          <p class="font-bold">
            {{ hobby.title }}
          </p>
          <div class="Hobbies__list-item-content" v-html="hobby.content" />
        </li>
      </ul>
    </div>
  </GridWrapper>
</template>

<script>
import hobbies from '~/content/hobbies'

export default {
  name: 'HobbiesSection',
  data: () => ({ hobbies })
}
</script>

<style lang="postcss">
.Hobbies__list-item-content > p {
  @apply m-0;

  @screen sm {
    @apply m-0;
  }

  @screen md {
    @apply m-0;
  }
}
</style>
