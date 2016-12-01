import React, { Component } from 'react'
import { Link } from 'react-router'

import http from './utils/http'
import RouteList from './utils/routes'
import './css/index.css'
/**
 * @class
 * @name App
 * @description Container for all views
 */
export default class App extends Component {
	componentDidMount() {
		window.http = http
	}
	render() {
		const navRoutes = RouteList.map((route,i) => {
			const currentPath = location.pathname,
				  navProps = {
				  	className: currentPath === route.path ? 'navlink active' : 'navlink'
				  },
				  linkProps = {
				  	to: route.disabled ? null : route.path,
				  	'data-disabled': route.disabled ? true : null
				  }
			return (
				<li key={i} {...navProps} ><Link {...linkProps}>{route.name}</Link></li>
				)
		})
		return (
			<main>
				<header>
					<h3><Link to='/'>BracketSpace</Link></h3>
					<nav id="site">
						<ul className='inline'>
							{navRoutes}
						</ul>
						{/*<Breadcrumbs source={routes}/>*/}
					</nav>
				</header>
				<section>
					{this.props.children}
				</section>
			</main>
		)
	}
}