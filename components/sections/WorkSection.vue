<template>
  <section
    id="work"
    ref="work"
    class="Work wrapper section"
  >
    <h2 class="t-h2 text-primary mb-base-54">
      Work
    </h2>
    <div class="Work__body">
      <transition name="fade-up" appear>
        <WorkSectionItem
          id="rotate1"
          company-url="https://studiorotate.com/"
          company-text="Rotate°"
          job-role="Technical Lead"
        >
          <template #company-logo>
            <img
              class="logo"
              src="/rotate-logo.png"
              alt="Rotate"
            >
          </template>
          <template #content>
            <p>.................</p>
          </template>
        </WorkSectionItem>
      </transition>

      <transition name="fade-up" appear>
        <WorkSectionItem
          id="rotate2"
          company-url="https://studiorotate.com/"
          company-text="Rotate°"
          job-role="Senior Javascript Engineer"
        >
          <template #company-logo>
            <img
              class="logo"
              src="/rotate-logo.png"
              alt="Rotate"
            >
          </template>
          <template #content>
            <p>.................</p>
          </template>
        </WorkSectionItem>
      </transition>

      <transition name="fade-up" appear>
        <WorkSectionItem
          id="hex3"
          company-url="https://www.hexdigital.com/"
          company-text="Hex Digital"
          job-role="Full Stack Developer"
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
              <ExternalLink href="https://whirli.com/">
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
                <ExternalLink href="https://inkonitorestaurant.com/">
                  Inko Nito</ExternalLink> and
                <ExternalLink href="https://zumarestaurant.com/">
                  Zuma</ExternalLink> sites AA Accessible
              </li>
              <li>
                Rebuilding the
                <ExternalLink href="https://www.tessian.com/">
                  Tessian</ExternalLink> site with ReactJS
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
      </transition>

      <transition name="fade-up" appear>
        <WorkSectionItem
          id="economist4"
          company-url="https://www.economist.com/"
          company-text="The Economist"
          job-role="Front-End Engineer"
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
              <ExternalLink href="https://www.economist.com/">
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
      </transition>
    </div>
  </section>
</template>

<script>
import ExternalLink from '@/components/ExternalLink.vue'
import WorkSectionItem from '@/components/WorkSectionItem.vue'

export default {
  name: 'WorkSection',

  components: { WorkSectionItem, ExternalLink }
}
</script>

<style lang="postcss" scoped>
.Work {
  @apply flex items-center flex-col;
}

.logo {
  width: 50px;

  @screen sm {
    width: 80px;
  }
}
</style>
