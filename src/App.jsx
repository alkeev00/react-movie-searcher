import style from './App.module.css'
import React from 'react'
import Header from './components/layouts/Header/Header'
import Main from './components/layouts/Main/Main'
import Footer from './components/layouts/Footer/Footer'

function App() {
	return (
		<div className={style.app}>
			<div className={style.container}>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}

export default App
