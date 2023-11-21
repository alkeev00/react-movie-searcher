import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<p>
				Copyright {new Date().getFullYear()}&nbsp;
				<a href='https://github.com/alkeev00'>alkeev00</a>.
			</p>
			<p>All Rights Reserved.</p>
		</footer>
	)
}

export default Footer
