import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@fontsource/work-sans';

const fonts = {
	//mono: `'Menlo', monospace`,
	heading: `'work-sans', sans-serif`,
	body: `'work-sans', sans-serif`,
};

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: false,
};
const breakpoints = createBreakpoints({
	xs: '0em', // too small
	sm: '30em', //mobile
	md: '48em', //tablet
	lg: '64em', //laptop
	xl: '80em', //desktop
	'2xl': '96em', // Extra large
});

const theme = extendTheme({
	semanticTokens: {
		colors: {
			text: {
				default: '#16161D',
				_dark: '#ade3b8',
			},
			heroGradientStart: {
				default: '#7928CA',
				_dark: '#e3a7f9',
			},
			heroGradientEnd: {
				default: '#FF0080',
				_dark: '#fbec8f',
			},
		},
		radii: {
			button: '12px',
		},
	},
	colors: {
		black: '#16161D',
		brand: {

			100: '#4883F7',
			200: '#9747EC',
			300: '#EFF1f3',
			400: '#fff',
			500: '#676e6f',
			600: '#778282',
			700: '#D3D4D8',
			800: '#F9FFE8',
			900: '#F5F5F5',
      1000: '#748282',
      1100: '#3FB6EC'

		},
	},

	fonts,
	breakpoints,
	config,
});

export default theme;
