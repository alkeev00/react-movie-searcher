import React, { useEffect, useState } from 'react'
import style from './Main.module.css'
import MoviesList from '../../ux/MoviesList/MoviesList'
import Preloader from '../../ux/Preloader/Preloader'
import Search from '../../ux/Search/Search'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(true)

	const searchMovies = (str, type = 'all') => {
		setLoading(true)
		fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
				type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search)
				setLoading(false)
			})
			.catch(err => {
				console.error(err)
				setLoading(false)
			})
	}

	useEffect(function getMovies() {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=fast`)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search)
				setLoading(false)
			})
			.catch(err => {
				console.error(err)
				setLoading(false)
			})
	}, [])

	return (
		<main className={style.main}>
			<Search searchMovies={searchMovies} />
			{loading ? <Preloader /> : <MoviesList movies={movies} />}
		</main>
	)
}

export default Main
