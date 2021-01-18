import React from 'react'
import moment from 'moment'

function Result({ result}) {
	return (
		<div className="result" >
			<div className="first">
			<img alt="poster" width="120" src={result.poster_src}/>
			</div>
			<div className="Second">
			<h3>{result.title}</h3>
			<p>release date :{moment(result.release_date).format("Do MMM YYYY")}{" "}</p>
			<p>rating : {result.vote_average}</p>

			<p>{result.overview}</p>
			</div>
			
		</div>
	)
}

export default Result
