import { extendTheme } from "native-base";

const theme = extendTheme({

  colors: {
    primary: {
      50: '#E0F4F4',
      100: '#B2E6E6',
      200: '#80D8D8',
      300: '#4DBFBF',
      400: '#26A8A8',
      500: '#047C74', // Cor principal
      600: '#036B63',
      700: '#025C54',
      800: '#014E46',
      900: '#003B35',
    },
    errors: {}

  },
  components: {
    Input: {
      baseStyle: {
        color: 'primary.900',
        borderColor: 'primary.50',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'primary.50',
        paddingLeft: 10,

      },
      _placeholder: {
        color: 'primary.900', // Cor do texto ao focar
      },
    },
    defaultProps: {
      _focus: {
        _placeholder: {
          color: 'primary.900', // Cor do texto ao focar
        },
        borderColor: 'primary.900', // Cor da borda ao focar
      },
    },
    Button: {
      variants: {
        smart: {
          backgroundColor: 'primary.500',
          _pressed: {
            backgroundColor: 'primary.700',
          },
        },
      },
    },
    FormControl: {
      baseStyle: {
        _label: {
          color: 'primary.900', // Cor do texto da label
        },
      },
      defaultProps: {
        _label: {
          color: 'primary.900', // Cor do texto da label
        },
      },
    },
  },
  // config: {
  //   // Changing initialColorMode to 'dark'
  //   initialColorMode: 'dark'
  // }
});



// 2. Get the type of the CustomTheme
type CustomThemeType = typeof theme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType { }
}

export default theme



// import { extendTheme } from "native-base";

// const theme = extendTheme({
//   components: {
//     Button: {
//       defaultProps: {
//         colorScheme: "#047c74"
//       },
//     },
//     Text: {
//       baseStyle: {
//         color: 'red'
//       },
//     },
//     Input: {
//       defaultProps: {
//         colorScheme: "red"
//       }
//       baseStyle: {
//         borderColor: 'red',
//         borderWidth: 1,
//         borderRadius: 8,
//         backgroundColor: 'red',
//         paddingLeft: 10,
//       },
//     },
//   },

//   smart: {
//     1: "04b494",
//     2: "#153242",
//     3: "#aeece5",
//     4: "#34d4c4",
//     5: "#047c74"
//   },

//   background: {
//     50: 'white',
//   },

//   // colors: {

//   //   // Add new color
//   //   primary: {
//   //     50: '#E3F2F9',
//   //     100: '#C5E4F3',
//   //     200: '#A2D4EC',
//   //     300: '#7AC1E4',
//   //     400: '#47A9DA',
//   //     500: '#047c74',
//   //     600: '#34d4c4',
//   //     700: '#006BA1',
//   //     800: '#005885',
//   //     900: '#003F5E'
//   //   },
//   //   // Redefining only one shade, rest of the color will remain same.
//   //   amber: {
//   //     400: '#d97706'
//   //   }
//   // },
//   config: {
//     // Changing initialColorMode to 'dark'
//     initialColorMode: 'dark'
//   }
// });

// // 2. Get the type of the CustomTheme
// type CustomThemeType = typeof theme;

// // 3. Extend the internal NativeBase Theme
// declare module 'native-base' {
//   interface ICustomTheme extends CustomThemeType { }
// }

// export default theme