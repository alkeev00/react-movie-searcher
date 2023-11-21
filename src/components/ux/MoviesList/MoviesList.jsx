import React from 'react'
import style from './MoviesList.module.css'
import CardMovie from '../CardMovie/CardMovie'

const MoviesList = props => {
	const { movies = [] } = props

	return (
		<div className={style.moviesList}>
			{movies.length ? (
				movies.map(movie => <CardMovie key={movie.imdbID} {...movie} />)
			) : (
				<h3>Movie not found</h3>
			)}
		</div>
	)
}

export default MoviesList
