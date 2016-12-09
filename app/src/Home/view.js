// @flow
import React, { Component } from 'react'
import { 
	VictoryBar as Bar,
	VictoryChart as Victory,
	VictoryAxis as Axis,
	VictoryStack as Stack,
	VictoryTheme 
} from 'victory'
import extend, { extractValues, themeOptions as theme } from '../utils/themeBuilder'

const websiteVisitors = [
		{ week: 1, visitors: 100 },
		{ week: 2, visitors: 124 },
		{ week: 3, visitors: 97 },
		{ week: 4, visitors: 85 },
		{ week: 5, visitors: 96 },
		{ week: 6, visitors: 104 },
		{ week: 7, visitors: 109 },
		{ week: 8, visitors: 93 }
	],
	websiteVisitors2 = [
		{ week: 9, visitors: parseInt(100*1.3) },
		{ week: 10, visitors: parseInt(124*1.3) },
		{ week: 11, visitors: parseInt(97*1.3) },
		{ week: 12, visitors: parseInt(85*1.3) },
		{ week: 13, visitors: parseInt(96*1.3) },
		{ week: 14, visitors: parseInt(104*1.3) },
		{ week: 15, visitors: parseInt(109*1.3) },
		{ week: 16, visitors: parseInt(93*1.3) }
	],
	wvXAxis = websiteVisitors.concat(websiteVisitors2).map(entry => entry.week.toString());

// console.table(websiteSessions)

const colors = theme.getColors('nationalPark'),
	myTheme = extend(VictoryTheme.material, {
		axis: {
			style: {
				axis: {
					stroke: colors.redwood,//'#999',
					strokeWidth: theme.strokeWidth
				},
				axisLabel: {
					padding: theme.padding,
					stroke: 'transparent',
					textAnchor: 'middle'
				},
				grid: {
					stroke: colors.goldenSunlight,
					strokeDasharray: theme.getStrokeDash('light')
				},
				ticks: {
					fill: 'transparent',
					size: (theme.padding / 2),
					stroke: colors.redwood,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeWidth: theme.strokeWidth
				},
				tickLabels: {
					fill: '#333',
					padding: 5,
					stroke: 'transparent'
				}
			}
		},
		bar: {
			style: {
				data: {
					fill: colors.rangerGreen,
					padding: theme.padding,
					stroke: 'transparent',
					strokeWidth: 0,
					width: 10
				}
			}
		},
		stack: {
			colorScale: extractValues(theme.getColors('warm')).reverse()
		}
	})

export default class Home extends Component {
	render() {
		return (
			<article id="view-home">
				<h1>{`{ Welcome to BracketSpace }`}</h1>
				<div style={{maxWidth:`600px`}}>
					<Victory domain={{x: [1,16], y:[0,160]}} domainPadding={25} theme={myTheme}>
						<Axis tickValues={wvXAxis}/>
						<Axis dependentAxis/>
						<Stack colorStack={'default'}>
							<Bar data={websiteVisitors} x='week' y='visitors'/>
							<Bar data={websiteVisitors2} x='week' y='visitors'/>
						</Stack>
					</Victory>
				</div>
			</article>
		)
	}
}