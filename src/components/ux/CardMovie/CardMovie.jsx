import React from 'react'
import style from './CardMovie.module.css'

const CardMovie = props => {
	const {
		Title: title,
		Year: year,
		imdbID: id,
		Type: type,
		Poster: poster,
	} = props

	if ((poster !== 'N/A') & (type !== 'game')) {
		return (
			<div className={style.card}>
				<div id={id} className={style.card__image}>
					<img src={poster} alt={title} className={style.image} />
				</div>
				<div className={style.card__content}>
					<h3 className={style.content__title}>{title}</h3>
					<p className={style.content__year}>{year}</p>
				</div>
			</div>
		)
	}
}

export default CardMovie
