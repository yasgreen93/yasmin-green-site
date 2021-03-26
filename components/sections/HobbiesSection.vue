<template>
  <section
    id="hobbies"
    ref="hobbies"
    class="Hobbies section"
  >
    <div class="wrapper">
      <h2 class="t-h2 mb-b54 mt-b36 text-center">
        Hobbies
      </h2>
      <ul>
        <li v-for="(hobby, index) in hobbies" :key="index">
          {{ hobby }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HobbiesSection',
  data: () => ({
    hobbies: [
      'Knitting',
      'Reading',
      'Skateboarding',
      'Bouldering',
      'Snowboarding',
      'Skiing',
      'Guitar',
      'Piano'
    ]
  })
}
</script>

<style scoped lang="postcss" />
