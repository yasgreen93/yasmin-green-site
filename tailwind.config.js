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
        offwhite: '#f1f4ff',
        darkblue: '#1e1e5d',
        darkblueOp25: 'rgba(30, 30, 93, 0.25)',
        blue: '#587ffc',
        lightblue: '#92a5fd',
        pink: '#ff8692'
      },
      spacing: {
        b6: '6px',
        b12: '12px',
        b18: '18px',
        b24: '24px',
        b30: '30px',
        b36: '36px',
        b42: '42px',
        b48: '48px',
        b54: '54px',
        b60: '60px',
        b66: '66px',
        b72: '72px',
        b78: '78px',
        b84: '84px',
        b90: '90px',
        b96: '96px',
        b102: '102px',
        b108: '108px',
        b114: '114px',
        b120: '120px',
        b150: '150px'
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
