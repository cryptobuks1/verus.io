module.exports = {
  // purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '786px',
      lg: '1236px',
      xl: '1236px',
    },
    fontFamily: {
      display: ['Geomanist', 'sans-serif'],
      body: ['Geomanist', 'sans-serif'],
      p: ['Source Sans Pro', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      custom: '15px',
      custom2: '19px',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xl5: '1.37rem',
      '2xl': '1.5rem',
      '2xl5': '1.7rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3rem',
      '7xl': '5rem',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        gray: {
          '105': '#fafafa',
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '305': '#e9e9e9',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        navlink: {
          default: '#353535',
          hover: '#8d8d8d',
          active: '#000',
        },
        tablink: {
          default: '#b1b1b1',
          active: '#3165d4',
        },
        bluebutton: {
          default: '#3165d4',
          hover: '#2856b9',
        },
        bluetrans: {
          defualt: '#ccdaf8',
          alter: '#f4f7ff',
        },
        menu: {
          active: '#f7faff',
        },
        'theme-white': '#fff',
        'theme-blue': '#3165D4',
        'theme-green': '#4AA658',
        'theme-black': '#1d1e22',
      },
      borderRadius: {
        sm: '.125rem',
        default: '.3125rem',
        lg: '.4375rem',
      },
      boxShadow: {
        default: '2px 2px 3px 0 rgba(0,0,0,0.22)',
        lg: '2px 2px 4px 0 rgba(0,0,0,0.07), 4px 4px 28px 0 rgba(0,0,0,0.13)',
        xl: '2px 2px 4px 0 rgba(0,0,0,0.07), 4px 4px 28px 0 rgba(0,0,0,0.33)',
        menu: '2px 2px 11px 0 rgba(0,0,0,0.4)',
      },
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
  },
  variants: { aspectRatio: ['responsive'] },
  plugins: [
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio'),
  ],
  purge: ['./components/**/*.js', './pages/**/*.js'],
};
