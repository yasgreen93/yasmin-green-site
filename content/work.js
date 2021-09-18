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
      <ul>
        <li>Lead the rebuild of <a
          href="https://www.biggreenegg.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          class="ELink"
        >Big Green Egg</a>, moving their old site from Magento to a modern stack of Nuxt, VueJS, TailwindCSS, DatoCMS, Commerce Layer and NodeJS. Utilised Hookdeck to massively simplify API webhook processes, from order processing to sending transactional emails with Mailgun making the whole API platform a lot more stable.</li>
        <li>Lead the rebuild of Big Green Egg’s Dealers (B2B) portal utilising B2BWave and expanding on it to add bespoke functionality and features that the client required. This made customer-service and user experiences a lot clearer and easier.</li>
        <li>Lead the rebuild of <a
          href="https://commercelayer.io/"
          target="_blank"
          rel="noopener noreferrer"
          class="ELink"
        >Commerce Layer</a> in Nuxt, VueJS, TailwindCSS, DatoCMS.</li>
        <li>Lead the migration of <a
          href="https://bamford.com/uk"
          target="_blank"
          rel="noopener noreferrer"
          class="ELink"
        >Bamford's</a> two UK and US Shopify stores to one Shopify store that handles multiple currencies - built with Shopify and Contentful’s headless APIs, Nuxt, VueJS, PostCSS. Massively simplified the front end and API increasing performance and stability.</li>
        <li>Started and was the driving force of technical documentation for projects. Not only has this helped fellow developers, but Project Managers, Strategists, and Marketing, understand how certain features work, troubleshooting issues, and the architectural overview.</li>
        <li>Conducted many interviews to hire mid-weight and senior developers.</li>
        <li>Conducted many quarterly reviews for the developers in my team, reviewing their goals and discussing areas of improvements.</li>
      </ul>
    `,
    hideShowMoreBtn: false
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
      <ul>
        <li>Contributed towards the Chilly's Bottles Series 2 website rebuild with Nuxt, VueJS, PostCSS, DatoCMS and Commerce Layer.</li>
        <li>Mentored developers in feature development, code reviews and helping them approach problems from different angles.</li>
      </ul>
    `,
    hideShowMoreBtn: true
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
      <a
        href="https://whirli.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="ELink"
      >Whirli</a> in which I originally helped build the original site, a VueJS and Laravel monolith.
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
        <a
          href="https://inkonitorestaurant.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="ELink"
        >Inko Nito</a> and
        <a
          href="https://zumarestaurant.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="ELink"
        >Zuma</a> sites AA Accessible
      </li>
      <li>
        Rebuilding the
        <a
          href="https://www.tessian.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="ELink"
        >Tessian</a> site with ReactJS
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
      <a
        href="https://www.economist.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="ELink"
      >The Economist</a>. This involved working very closely with UI and UX
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
