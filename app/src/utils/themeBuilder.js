// @flow
export default function extend(theme:Object,extension:Object) {
	return {
		...theme,
		...extension
	}
}

export function extractValues(objectToExtract) {
	return Object.values(objectToExtract)
}

const themeOptions = {
	getColors: (style:string) => {
		switch (style) {
			// Temps
			case 'warm':
				return {
					duneBeige: '#FCFAEF',
					sandstone: '#E2E0A5',
					redSun: '#D3504A',
					redSunShadow: '#A63636'
				};
				break;
			case 'cool':
				return {};
				break;
			// Themes
			case 'nationalPark': 
				return {
					rangerGreen: '#468966',
					riverbankSand: '#FFF0A5',
					goldenSunlight: '#FFB03B',
					redwood: '#B64926'
				};
				break;
			case 'nautical': 
				return {
					blaze: '#F33535',
					wavebreak: '#D8E9F0',
					navyTrim: '#33425B',
					darkwater: '#29252C'
				}
			case 'retroSummer':
				return {
					heavyCream: '#FFFBAF',
					watermelon: '#FF5656',
					strawberry: '#CD0A0A',
					mint: '#42CFC4'
				}
				break;
			default:
				console.warn('Unsupported color theme choice. | themeOptions.colors')
				break;
		}
	},
	getStrokeDash: (style:string) => {
		switch (style) { 
			case 'dash':
				return '10,5';
				break; 
			case 'light':
				return '1,5';
				break; 
			case 'dots':
				return '1,2';
				break;
			default:
				console.warn('Unsupported stroke choice. | themeOptions.strokeDash')
				break;
		}
	},
	padding: 25,
	strokeWidth: 2
}

export { themeOptions }