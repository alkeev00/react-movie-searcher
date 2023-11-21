import React from 'react'
import style from './Header.module.css'
import { VscMenu } from 'react-icons/vsc'

const Header = () => {
	return (
		<header className={style.header}>
			<a href='!#' className={style.logo}>
				<h1>
					<span>Movies</span> React
				</h1>
			</a>
			<nav className={style.menu}>
				<ul className={style.menu__list}>
					<li className={style.menu__item}>
						<a href='!#'>Library</a>
					</li>
					<li className={style.menu__item}>
						<a href='!#'>Contact</a>
					</li>
				</ul>
				<div className={style.mobile__btn}>
					<VscMenu size={35} />
				</div>
			</nav>
		</header>
	)
}

export default Header
