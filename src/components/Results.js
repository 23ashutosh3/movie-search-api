import React from 'react'

import Result from './Result'

function Results ({ results}) {
	return (
		<section className="results">

			{results.map(result => (
				result.poster_src = "https://image.tmdb.org/t/p/w185" + result.poster_path,

				<Result key={result.id} result={result}  />
			))}
		</section>
	)
}

export default Results
