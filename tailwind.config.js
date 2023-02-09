/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Adjusted Tailwind default so that prose width only applies to <p> tags
            maxWidth: 'none',
            p: {
              maxWidth: '60ch',
            },
            ul: {
              maxWidth: '60ch',
            },
            // Adjusted Tailwind default to un-bold quotes and make the line thinner
            blockquote: {
              fontWeight: '400',
              borderLeftWidth: '1px',
            },
          }
        },
        stone: {
          css: {
            '--tw-prose-body': theme('colors.stone.800'),
            '--tw-prose-hr': theme('colors.stone.300'),
            '--tw-prose-quotes': theme('colors.stone.600'),
            '--tw-prose-quote-borders': theme('colors.stone.300'),
            '--tw-prose-th-borders': theme('colors.stone.300'),
            '--tw-prose-invert-body': theme('colors.stone.50 / 98%'),
            '--tw-prose-invert-links': theme('colors.stone.50 / 98%'),
            '--tw-prose-invert-bold': theme('colors.stone.50 / 98%'),
            '--tw-prose-invert-counters': theme('colors.stone.50 / 75%'),
            '--tw-prose-invert-bullets': theme('colors.stone.100 / 40%'),
            '--tw-prose-invert-hr': theme('colors.stone.100 / 25%'),
            '--tw-prose-invert-quotes': theme('colors.stone.50 / 80%'),
            '--tw-prose-invert-quote-borders': theme('colors.stone.100 / 25%'),
            '--tw-prose-invert-th-borders': theme('colors.stone.100 / 25%'),
            '--tw-prose-invert-td-borders': theme('colors.stone.100 / 10%'),
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
