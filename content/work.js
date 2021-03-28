import themes from '@/config/themes.js'

export default [
  {
    id: 'rotate1',
    theme: themes.pink,
    company: {
      name: 'Rotate°',
      url: 'https://studiorotate.com/',
      logo: { url: '/rotate-logo.png', alt: 'Rotate logo' }
    },
    role: 'Technical Lead',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    `
  },
  {
    id: 'rotate2',
    theme: themes.darkblue,
    company: {
      name: 'Rotate°',
      url: 'https://studiorotate.com/',
      logo: { url: '/rotate-logo.png', alt: 'Rotate logo' }
    },
    role: 'Senior Javascript Engineer',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    `
  },
  {
    id: 'hex3',
    theme: themes.pink,
    company: {
      name: 'Hex Digital',
      url: 'https://www.hexdigital.com/',
      logo: { url: '/hex-logo.png', alt: 'Hex logo' }
    },
    role: 'Full Stack Developer',
    content: `
    <p>I have worked with many clients including
      <ELink
        href="https://whirli.com/"
        :hover="themes.pink.accent"
      >Whirli</ELink> in which I originally helped build the original site, a VueJS and Laravel monolith.
      In addition, I led the re-build and transformation of the Whirli front end into a Nuxt Typescript
      Universal
      Web App and modernised their release process to CI and CD with CircleCI and Cypress. This included using
      Storybook to create a large library of accessible and reusable components, and introducing
      feature tests as well as unit and snapshot testing.
    </p>
    <p>Other projects include:</p>
    <ul>
      <li>
        Making
        <ELink
          href="https://inkonitorestaurant.com/"
          :hover="themes.pink.accent"
        >Inko Nito
        </ELink> and
        <ELink
          href="https://zumarestaurant.com/"
          :hover="themes.pink.accent"
        >Zuma</ELink> sites AA Accessible
      </li>
      <li>
        Rebuilding the
        <ELink
          href="https://www.tessian.com/"
          :hover="themes.pink.accent"
        >Tessian</ELink> site with ReactJS
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
    `
  },
  {
    id: 'economist4',
    theme: themes.darkblue,
    company: {
      name: 'The Economist',
      url: 'https://www.economist.com/',
      logo: { url: '/economist-logo.png', alt: 'Economist logo' }
    },
    role: 'Front-End Engineer',
    content: `
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
      <ELink
        href="https://www.economist.com/"
        :hover="themes.darkblue.accent"
      >The Economist</ELink>. This involved working very closely with UI and UX
      designers, data analysts and other developers further down in the stack.
    </p>
    <p>
      I also worked on another project which involves integrating The Economist articles into Google AMP using
      server
      side rendering with ReactJS, AMP templates and NodeJS for a very fast and seamless experience for our
      users.
    </p>
    `
  }
]
