<template>
  <section
    id="work"
    class="Work wrapper section"
  >
    <h2 class="t-h2 text-primary mb-base-48">
      Work
    </h2>
    <div class="Work__body">
      <div class="mb-base-48">
        <h3>
          <a
            href="https://studiorotate.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextIconHover>
              <template #text>
                Rotate°
              </template>
              <template #icon>
                <img
                  class="logo"
                  src="/rotate-logo.png"
                  alt="Rotate"
                >
              </template>
            </TextIconHover>
          </a> - Senior Javascript Engineer
        </h3>
        <p>..............</p>
      </div>
      <div class="mb-base-48">
        <h3>
          <a
            href="https://www.hexdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextIconHover>
              <template #text>
                Hex Digital
              </template>
              <template #icon>
                <img
                  class="logo"
                  src="/hex-logo.svg"
                  alt="Hex Digital"
                >
              </template>
            </TextIconHover>
          </a> - Full Stack Developer
        </h3>
        <p>
          I have worked with many clients including <ExternalLink href="https://whirli.com/">
            Whirli</ExternalLink> in which I originally helped build the original site, a VueJS and Laravel monolith.
          In addition, I led the re-build and transformation of the Whirli front end into a Nuxt Typescript Universal
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
            <ExternalLink
              href="https://inkonitorestaurant.com/"
            >
              Inko Nito</ExternalLink>
            and
            <ExternalLink
              href="https://zumarestaurant.com/"
            >
              Zuma</ExternalLink> sites AA Accessible
          </li>
          <li>
            Rebuilding the <ExternalLink href="https://www.tessian.com/">
              Tessian</ExternalLink> site with ReactJS
          </li>
          <li>Building the Whirli blog using Wordpress as a headless CMS</li>
          <li>Contributing to the static Nuxt site for Brewtopia, a beer cataloging and searching app.</li>
        </ul>
        <p>
          I have worked very closely with designers, UX, PMs and other developers to deliver these products using Agile
          methodologies. My time at Hex has been fast paced and a brilliant challenge. It has given me a fantastic
          opportunity for learning new technologies and bettering my skills at mentoring and presenting.
        </p>
      </div>
      <div>
        <h3>
          <a
            href="https://www.economist.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TextIconHover>
              <template #text>
                The Economist
              </template>
              <template #icon>
                <img
                  class="logo"
                  src="/economist-logo.svg"
                  alt="The Economist"
                >
              </template>
            </TextIconHover>
          </a> - Front-End Engineer
        </h3>
        <p>
          I was at The Economist for 2 years using a number of new technologies, including ReactJS, NodeJS, GraphQL,
          Relay, Redux, Jest, Mocha, Chai and Enzyme.
        </p>
        <p>
          During my time at The Economist I worked in cross-functional and Agile teams covering the development of The
          Economist’s new website. This included integrating and testing new features. One of the main projects I have
          been a part of involved iterating on customer feedback and data analytics to improve the subscriber’s
          experiences when they visit <ExternalLink href="https://www.economist.com/">
            The Economist</ExternalLink>. This involved working very closely with UI and UX
          designers, data analysts and other developers further down in the stack.
        </p>
        <p>
          I also worked on another project which involves integrating The Economist articles into Google AMP using server
          side rendering with ReactJS, AMP templates and NodeJS for a very fast and seamless experience for our users.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import TextIconHover from '@/components/TextIconHover.vue'
import ExternalLink from '@/components/ExternalLink.vue'
export default {
  name: 'WorkSection',
  components: { ExternalLink, TextIconHover }
}
</script>

<style lang="postcss" scoped>
.Work {
  @apply flex items-center flex-col;
}

.logo {
  width: 90px;
}
</style>
