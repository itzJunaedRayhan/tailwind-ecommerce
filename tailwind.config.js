module.exports = {
  mode: 'jit',
  purge: ['./dist/*.{html,js}'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '990px',
      'xl': '1200px'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        'primary': '#FD3D57'
      }
    },
  },
  plugins: [],
}
