import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import Home from './Home/view'
import Setup from './Setup/view'
import Bracket from './Bracket/view'
import Stats from './Stats/view'

import './css/critical.css'

render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path="/setup" component={Setup}/>
			<Route path="/bracket" component={Bracket}/>
			<Route path="/stats" component={Stats}/>
		</Route>
	</Router>
	),
	document.querySelector('#root'));