module.exports = {
  theme: {
    container: {
      center: true
    },
    minWidth: {
      '64': '16rem'
    },
    extend: {
      colors: {
        'purple': {
          '100': '#e8e7f0',
          '200': '#d1cfe1',
          '300': '#bab7d2',
          '400': '#a49fc3',
          '500': '#8d86b4',
          '600': '#5f5696',
          '700': '#483e87',
          '800': '#3f3676',
          '900': '#362f65',
        },
        'green': {
          '100': '#e5f5bf',
          '200': '#d8f09f',
          '300': '#cbeb80',
          '400': '#bee660',
          '500': '#b1e140',
          '600': '#a4dc20',
          '700': '#97d700',
          '800': '#84bc00',
          '900': '#71a100',
        },
        'orange': {
          '100': '#f9e3c8',
          '200': '#f6d4ac',
          '300': '#f3c690',
          '400': '#f1b874',
          '500': '#eeaa59',
          '600': '#eb9b3d',
          '700': '#e88d21',
          '800': '#cb7b1d',
          '900': '#ae6a19',
        },
        'whitesmoke': '#f7f7f7'
      }
    },
    fontFamily: {
      mont: ['Montserrat']
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover']
  },
  plugins: [
  ]
}

