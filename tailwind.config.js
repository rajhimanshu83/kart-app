// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Text"', ...fontFamily.sans],
      },
    },
  },
};
