import React, { Component } from 'react'
import { Link } from 'react-router'

import RouteList from './Utils/routes'
import './css/index.css'
/**
 * @class
 * @name App
 * @description Container for all views
 */
export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const navRoutes = RouteList.map((route,i) => {
			const currentPath = location.pathname,
				  navProps = {
				  	className: currentPath === route.path ? 'navlink active' : 'navlink'
				  }
			return (
				<li key={i} {...navProps} ><Link to={route.path}>{route.name}</Link></li>
				)
		})
		return (
			<main>
				<nav id="site">
					<ul className='inline'>
						{navRoutes}
					</ul>
					{/*<Breadcrumbs source={routes}/>*/}
				</nav>
				{this.props.children}
			</main>
		)
	}
}