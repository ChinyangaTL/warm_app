import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add new color
    // primary: {
    //   50: '#FF866C',
    //   100: '#EA2B02',
    //   200: '#D93816',
    //   300: '#CE4325',
    //   400: '#E15F43',
    //   500: '#C44A30',
    //   600: '#B33014',
    //   700: '#FF866C',
    //   800: '#FF866C',
    //   900: '#FF866C',
    // },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  components: {
    Button: {
      baseStyle: (props: any) => {
        return {
          _light: {color: 'primary.300'},
          _dark: {color: 'primary.400'},
        };
      },
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
