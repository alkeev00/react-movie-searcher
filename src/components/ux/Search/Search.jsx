import React, { useState } from 'react'
import style from './Search.module.css'
import { IoSearch } from 'react-icons/io5'

const Search = ({ searchMovies }) => {
	const [search, setSearch] = useState('')
	const [type, setType] = useState('all')

	const handleKey = event => {
		if (event.key === 'Enter') {
			searchMovies(search, type)
		}
	}
	const handleFilter = event => {
		setType(event.target.dataset.type)
		searchMovies(search, event.target.dataset.type)
	}

	return (
		<div className={style.search}>
			<div className={style.search__input}>
				<input
					type='text'
					placeholder='Search...'
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyDown={handleKey}
				/>
				<button
					className={style.search__btn}
					onClick={() => searchMovies(search, type)}
				>
					<IoSearch size={24} />
				</button>
			</div>
			<div className={style.search__filter}>
				<label className={style.search__radio}>
					<input
						type='radio'
						name='radio'
						data-type='all'
						onChange={handleFilter}
						checked={type === 'all'}
					/>
					<p>All</p>
				</label>
				<label className={style.search__radio}>
					<input
						type='radio'
						name='radio'
						data-type='movie'
						onChange={handleFilter}
						checked={type === 'movie'}
					/>
					<p>Movies</p>
				</label>
				<label className={style.search__radio}>
					<input
						type='radio'
						name='radio'
						data-type='series'
						onChange={handleFilter}
						checked={type === 'series'}
					/>
					<p>Series</p>
				</label>
			</div>
		</div>
	)
}

export default Search
