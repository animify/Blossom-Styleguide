import React from 'react'
import NavLink from './NavLink'

export const sbElements = React.createClass({
	render() {
		return (
			<ul>
				<NavLink to="/elements/buttons">Buttons</NavLink>
				<NavLink to="/elements/lists">Lists</NavLink>
				<NavLink to="/elements/dividers">Dividers</NavLink>
				<NavLink to="/elements/labels">Labels</NavLink>
				<NavLink to="/elements/comments">Comments</NavLink>
				<NavLink to="/elements/cards">Cards</NavLink>
				<NavLink to="/elements/input">Input</NavLink>
				<NavLink to="/elements/images">Images</NavLink>
				<NavLink to="/elements/messages">Messages</NavLink>
				<NavLink to="/elements/loaders">Loaders</NavLink>
				<NavLink to="/elements/tables">Tables</NavLink>
				<NavLink to="/elements/stages">Stages</NavLink>
			</ul>
		)
	}
})

export const sbAnimations = React.createClass({
	render() {
		return (
			<ul>
				<NavLink to="/design/scheme">Color Scheme</NavLink>
				<NavLink to="/design/typography">Typography</NavLink>
				<NavLink to="/design/animations">Animations & Effects</NavLink>
				<NavLink to="/design/grid">Grid</NavLink>
				<NavLink to="/design/breakpoints">Breakpoints</NavLink>
			</ul>
		)
	}
})

export const sbUtility = React.createClass({
	render() {
		return (
			<ul>
				<NavLink to="/utility/center">Center elements</NavLink>
				<NavLink to="/utility/hide">Hide elements</NavLink>
				<NavLink to="/utility/layout">Layout</NavLink>
			</ul>
		)
	}
})
