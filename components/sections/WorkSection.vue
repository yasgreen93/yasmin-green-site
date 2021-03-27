<template>
  <section
    id="work"
    ref="work"
    class="Work section pb-0"
  >
    <h2 class="t-h2 mb-b54 mt-b36">
      Work
    </h2>
    <div class="Work__body" :class="{ 'has-active-section': !!activeSection }">
      <div
        class="Work__body-item relative"
        :class="{ 'is-active': activeSection === 'rotate1' }"
      >
        <div class="Work__body-item-bg" :class="themes.pink.bg" />
        <WorkSectionItem
          id="rotate1"
          company-url="https://studiorotate.com/"
          company-text="Rotate°"
          job-role="Technical Lead"
          :theme="themes.pink"
          :active="activeSection === 'rotate1'"
          @open="setActive('rotate1')"
          @close="close"
        >
          <template #company-logo>
            <img
              class="logo"
              src="/rotate-logo.png"
              alt="Rotate"
            >
          </template>
          <template #content>
            <p>{{ lorum }}</p>
          </template>
        </WorkSectionItem>
      </div>
      <div
        class="Work__body-item is-reversed relative"
        :class="{ 'is-active': activeSection === 'rotate2' }"
      >
        <div class="Work__body-item-bg" :class="themes.darkblue.bg" />
        <WorkSectionItem
          id="rotate2"
          company-url="https://studiorotate.com/"
          company-text="Rotate°"
          job-role="Senior Javascript Engineer"
          :theme="themes.darkblue"
          :active="activeSection === 'rotate2'"
          @open="setActive('rotate2')"
          @close="close"
        >
          <template #company-logo>
            <img
              class="logo"
              src="/rotate-logo.png"
              alt="Rotate"
            >
          </template>
          <template #content>
            <p>{{ lorum }}</p>
          </template>
        </WorkSectionItem>
      </div>
      <div
        class="Work__body-item relative"
        :class="{ 'is-active': activeSection === 'hex3' }"
      >
        <div class="Work__body-item-bg" :class="themes.pink.bg" />
        <WorkSectionItem
          id="hex3"
          company-url="https://www.hexdigital.com/"
          company-text="Hex Digital"
          job-role="Full Stack Developer"
          :theme="themes.pink"
          :active="activeSection === 'hex3'"
          @open="setActive('hex3')"
          @close="close"
        >
          <template #company-logo>
            <img
              class="logo"
              src="/hex-logo.svg"
              alt="Hex Digital"
            >
          </template>
          <template #content>
            <p>
              I have worked with many clients including
              <ExternalLink href="https://whirli.com/" :hover="themes.pink.accent">
                Whirli</ExternalLink> in which I originally helped build the original site, a VueJS and Laravel monolith.
              In addition, I led the re-build and transformation of the Whirli front end into a Nuxt Typescript
              Universal
              Web App and modernised their release process to CI and CD with CircleCI and Cypress. This included using
              Storybook to create a large library of accessible and reusable components, and introducing
              feature tests as well as unit and snapshot testing.
            </p>
            <p>
              Other projects include:
            </p>
            <ul>
              <li>
                Making
                <ExternalLink href="https://inkonitorestaurant.com/" :hover="themes.pink.accent">
                  Inko Nito
                </ExternalLink>
                and
                <ExternalLink href="https://zumarestaurant.com/" :hover="themes.pink.accent">
                  Zuma
                </ExternalLink>
                sites AA Accessible
              </li>
              <li>
                Rebuilding the
                <ExternalLink href="https://www.tessian.com/" :hover="themes.pink.accent">
                  Tessian
                </ExternalLink>
                site with ReactJS
              </li>
              <li>Building the Whirli blog using Wordpress as a headless CMS</li>
              <li>Contributing to the static Nuxt site for Brewtopia, a beer cataloging and searching app.</li>
            </ul>
            <p>
              I have worked very closely with designers, UX, PMs and other developers to deliver these products using
              Agile
              methodologies. My time at Hex has been fast paced and a brilliant challenge. It has given me a fantastic
              opportunity for learning new technologies and bettering my skills at mentoring and presenting.
            </p>
          </template>
        </WorkSectionItem>
      </div>
      <div
        class="Work__body-item is-reversed relative"
        :class="{ 'is-active': activeSection === 'economist4' }"
      >
        <div class="Work__body-item-bg" :class="themes.darkblue.bg" />
        <WorkSectionItem
          id="economist4"
          company-url="https://www.economist.com/"
          company-text="The Economist"
          job-role="Front-End Engineer"
          :theme="themes.darkblue"
          :active="activeSection === 'economist4'"
          @open="setActive('economist4')"
          @close="close"
        >
          <template #company-logo>
            <img
              class="logo"
              src="/economist-logo.svg"
              alt="The Economist"
            >
          </template>
          <template #content>
            <p>
              I was at The Economist for 2 years using a number of new technologies, including ReactJS, NodeJS, GraphQL,
              Relay, Redux, Jest, Mocha, Chai and Enzyme.
            </p>
            <p>
              During my time at The Economist I worked in cross-functional and Agile teams covering the development of
              The
              Economist’s new website. This included integrating and testing new features. One of the main projects I
              have
              been a part of involved iterating on customer feedback and data analytics to improve the subscriber’s
              experiences when they visit
              <ExternalLink href="https://www.economist.com/" :hover="themes.darkblue.accent">
                The Economist</ExternalLink>. This involved working very closely with UI and UX
              designers, data analysts and other developers further down in the stack.
            </p>
            <p>
              I also worked on another project which involves integrating The Economist articles into Google AMP using
              server
              side rendering with ReactJS, AMP templates and NodeJS for a very fast and seamless experience for our
              users.
            </p>
          </template>
        </WorkSectionItem>
      </div>
    </div>
  </section>
</template>

<script>
import throttle from 'lodash.throttle'

export default {
  name: 'WorkSection',
  data: () => ({
    lorum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    themes: {
      offwhite: { bg: 'offwhite', text: 'darkblue', accent: 'pink' },
      pink: { bg: 'pink', text: 'darkblue', accent: 'offwhite' },
      darkblue: { bg: 'darkblue', text: 'offwhite', accent: 'pink' },
      blue: { bg: 'blue', text: 'offwhite', accent: 'darkblue' },
      lightblue: { bg: 'lightblue', text: 'darkblue', accent: 'pink' }
    },
    activeSection: null
  }),
  mounted() {
    if (!this.$refs.work) return
    window.addEventListener('scroll', throttle(this.observe, 500))
  },
  destroyed() {
    if (!this.$refs.work) return
    if (this.observer) this.observer.disconnect()
    if (this.timeout) clearTimeout(this.timeout)
    window.removeEventListener('scroll', throttle(this.observe, 500))
  },
  methods: {
    setActive(id) {
      this.$scrollTo(`#${id}`, 300, {
        easing: [0.18, 0.2, 0.5, 0.94],
        offset: -80,
        onDone: () => {
          this.activeSection = id
          this.$toggleScroll(true)
        }
      })
      this.$emit('section-active', true)
    },
    close() {
      const t = this
      this.$toggleScroll(false)
      this.activeSection = null
      const onCloseTransitionEndTime = 850
      this.timeout = setTimeout(() => { t.$emit('section-active', false) }, onCloseTransitionEndTime)
    },
    observe() {
      if (!this.$refs.work) return
      this.observer = new IntersectionObserver(this.onElementObserved)
      if (this.observer) this.observer.observe(this.$refs.work)
    },
    onElementObserved(entries) {
      entries.forEach(({ intersectionRatio }) => {
        if (intersectionRatio > 0.2) this.$emit('intersecting')
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.Work {
  @apply flex items-center flex-col;
}

.Work__body {
  @apply grid grid-cols-1 w-full;
}

.Work__body-item {
  @apply w-full flex justify-center;

  height: 600px;
  padding: 80px;
  transition-property: opacity, width, z-index;
  transition-duration: 0.5s, 0.5s, 0s;
  transition-delay: 0.3s, 0.5s, 0.5s;
  transition-timing-function: cubic-bezier(0.9, 0.15, 0.51, 0.95);

  &.is-reversed {
    justify-self: flex-end;
  }

  &.is-active {
    @apply w-full;

    transition-delay: 0s, 0s, 0.5s;
  }

  .Work__body.has-active-section & {
     &:not(.Work__body-item.is-active) {
       opacity: 0;
       pointer-events: none;
     }
   }

  @screen md {
    @apply w-1/2;
  }
}

.Work__body-item-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  transition: transform 0.5s cubic-bezier(0.9, 0.15, 0.51, 0.95) 0s;

  .Work__body-item.is-active & {
    transform: scaleY(10);
    transition: transform 0.5s cubic-bezier(0.9, 0.15, 0.51, 0.95) 0.5s;
  }

  &.pink {
    background-color: theme('colors.pink');
  }

  &.darkblue {
    background-color: theme('colors.darkblue');
  }
}

.logo {
  width: 50px;

  @screen sm {
    width: 80px;
  }
}
</style>
