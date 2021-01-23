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
          '33px',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.5px'
          }
        ],
        'h3-sm': [
          '22px',
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
          '18px',
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
        primary: '#4533d6',
        secondary: '#2AFFE6',
        red: '#AF0426',
        black: '#141414',
        darkGrey: '#1A1A1A',
        offwhite: '#f6f6f6'
      },
      spacing: {
        'base-6': '6px',
        'base-12': '12px',
        'base-18': '18px',
        'base-24': '24px',
        'base-30': '30px',
        'base-36': '36px',
        'base-42': '42px',
        'base-48': '48px',
        'base-54': '54px',
        'base-60': '60px',
        'base-66': '66px',
        'base-72': '72px',
        'base-78': '78px',
        'base-84': '84px',
        'base-90': '90px',
        'base-96': '96px',
        'base-102': '102px',
        'base-108': '108px',
        'base-114': '114px',
        'base-120': '120px',
        'base-150': '150px'
      },
      screens: {
        xs: '600px',
        xsMax: { max: '599px' },
        sm: '800px',
        smMax: { max: '799px' },
        md: '992px',
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
