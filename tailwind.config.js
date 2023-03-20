module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Dosis', 'system-ui'],
        serif: ['Bodoni Moda', 'system-ui']
      },
      fontSize: {
        'h1-lg': ['72px', {
          lineHeight: '1',
          letterSpacing: '-0.1px'
        }],
        'h1-sm': ['36px', '1'],
        'h2-lg': ['48px', '1'],
        'h2-sm': ['27px', '1.111111111'],
        'h3-lg': [
          '30px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.5px'
          }
        ],
        'h3-sm': [
          '24px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.5px'
          }
        ],
        'h4-lg': [
          '24px',
          {
            lineHeight: '1.125',
            letterSpacing: '0.005em'
          }
        ],
        'h4-sm': [
          '17px',
          {
            lineHeight: '1.235294118',
            letterSpacing: '0.015em'
          }
        ],
        'h5-lg': [
          '18px',
          {
            lineHeight: '1.166666667',
            letterSpacing: '0.015em'
          }
        ],
        'h5-sm': [
          '13px',
          {
            lineHeight: '1.230769231',
            letterSpacing: '0.03em'
          }
        ],
        'h6-lg': [
          '15px',
          {
            lineHeight: '1.2',
            letterSpacing: '0.03em'
          }
        ],
        'h6-sm': [
          '13px',
          {
            lineHeight: '1.230769231',
            letterSpacing: '0.03em'
          }
        ],
        'base-lg': [
          '17px',
          {
            lineHeight: '1.6',
            letterSpacing: '0.005em'
          }
        ],
        'base-sm': [
          '16px',
          {
            lineHeight: '1.75',
            letterSpacing: '0.005em'
          }
        ]
      },
      colors: {
        'off-white': '#f1f4ff',
        'light-grey': '#d9dade',
        'off-black': '#161616',
        violet: '#7A60FF'
      },
      container: {
        center: true
      },
      spacing: {
        1: '6px',
        2: '12px',
        3: '18px',
        4: '24px',
        5: '30px',
        6: '36px',
        7: '42px',
        8: '48px',
        9: '54px',
        10: '60px',
        11: '66px',
        12: '72px',
        13: '78px',
        14: '84px',
        15: '90px',
        16: '96px',
        17: '102px',
        18: '108px',
        19: '114px',
        20: '120px',
        21: '150px'
      },
      screens: {
        xs: '600px',
        xsMax: { max: '599px' },
        sm: '800px',
        smMax: { max: '799px' },
        md: '992px',
        mdMax: { max: '991px' },
        lg: '1200px',
        base: '1440px',
        xl: '1800px'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
