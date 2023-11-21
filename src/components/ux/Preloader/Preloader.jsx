import React from 'react'
import style from './Preloader.module.css'

const Preloader = () => {
	return (
		<div className={style.progress}>
			<div className={style.indeterminate}>Loading...</div>
		</div>
	)
}

export default Preloader
