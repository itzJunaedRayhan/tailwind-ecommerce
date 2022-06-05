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
      },
      backgroundImage: {
        'linear-gradient' : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('http://placehold.it/350x150')"
      }
    },
  },
  plugins: [],
}
